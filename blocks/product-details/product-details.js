/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { events } from '@dropins/tools/event-bus.js';
import { initializers } from '@dropins/tools/initializer.js';
import {
  InLineAlert,
  Icon,
  provider as UI,
} from '@dropins/tools/components.js';
import * as productApi from '@dropins/storefront-pdp/api.js';
import { render as productRenderer } from '@dropins/storefront-pdp/render.js';
import { addProductsToCart } from '@dropins/storefront-cart/api.js';
import ProductDetails from '@dropins/storefront-pdp/containers/ProductDetails.js';

// Libs
import {
  getProduct,
  getSkuFromUrl,
  setJsonLd,
  loadErrorPage,
} from '../../scripts/commerce.js';
import { getConfigValue } from '../../scripts/configs.js';
import { fetchPlaceholders } from '../../scripts/aem.js';

async function setJsonLdProduct(product) {
  const {
    name,
    inStock,
    description,
    sku,
    urlKey,
    price,
    priceRange,
    images,
    attributes,
  } = product;
  const amount = priceRange?.minimum?.final?.amount || price?.final?.amount;
  const brand = attributes.find((attr) => attr.name === 'brand');

  setJsonLd(
    {
      '@context': 'http://schema.org',
      '@type': 'Product',
      name,
      description,
      image: images[0]?.url,
      offers: [
        {
          '@type': 'http://schema.org/Offer',
          price: amount?.value,
          priceCurrency: amount?.currency,
          availability: inStock
            ? 'http://schema.org/InStock'
            : 'http://schema.org/OutOfStock',
        },
      ],
      productID: sku,
      brand: {
        '@type': 'Brand',
        name: brand?.value,
      },
      url: new URL(`/products/${urlKey}/${sku}`, window.location),
      sku,
      '@id': new URL(`/products/${urlKey}/${sku}`, window.location),
    },
    'product',
  );
}

function createMetaTag(property, content, type) {
  if (!property || !type) {
    return;
  }
  let meta = document.head.querySelector(`meta[${type}="${property}"]`);
  if (meta) {
    if (!content) {
      meta.remove();
      return;
    }
    meta.setAttribute(type, property);
    meta.setAttribute('content', content);
    return;
  }
  if (!content) {
    return;
  }
  meta = document.createElement('meta');
  meta.setAttribute(type, property);
  meta.setAttribute('content', content);
  document.head.appendChild(meta);
}

function setMetaTags(product) {
  if (!product) {
    return;
  }

  const price = product.priceRange
    ? product.priceRange.minimum.final.amount
    : product.price.final.amount;

  createMetaTag('title', product.metaTitle, 'name');
  createMetaTag('description', product.metaDescription, 'name');
  createMetaTag('keywords', product.metaKeyword, 'name');

  createMetaTag('og:type', 'og:product', 'property');
  createMetaTag('og:description', product.shortDescription, 'property');
  createMetaTag('og:title', product.metaTitle, 'property');
  createMetaTag('og:url', window.location.href, 'property');
  const mainImage = product?.images?.filter((image) => image.roles.includes('thumbnail'))[0];
  const metaImage = mainImage?.url || product?.images[0]?.url;
  createMetaTag('og:image', metaImage, 'property');
  createMetaTag('og:image:secure_url', metaImage, 'property');
  createMetaTag('og:product:price:amount', price.value, 'property');
  createMetaTag('og:product:price:currency', price.currency, 'property');
}

export default async function decorate(block) {
  if (!window.getProductPromise) {
    window.getProductPromise = getProduct(this.props.sku);
  }

  const [product, placeholders] = await Promise.all([
    window.getProductPromise,
    fetchPlaceholders(),
  ]);

  if (!product) {
    await loadErrorPage();
    return Promise.reject();
  }

  const langDefinitions = {
    default: {
      ...placeholders,
    },
  };

  const models = {
    ProductDetails: {
      initialData: { ...product },
    },
  };

  // Initialize Dropins
  initializers.register(productApi.initialize, {
    langDefinitions,
    models,
  });

  // Set Fetch Endpoint (Service)
  productApi.setEndpoint(await getConfigValue('commerce-endpoint'));

  // Set Fetch Headers (Service)
  productApi.setFetchGraphQlHeaders({
    'Content-Type': 'application/json',
    'Magento-Environment-Id': await getConfigValue('commerce-environment-id'),
    'Magento-Website-Code': await getConfigValue('commerce-website-code'),
    'Magento-Store-View-Code': await getConfigValue('commerce-store-view-code'),
    'Magento-Store-Code': await getConfigValue('commerce-store-code'),
    'Magento-Customer-Group': await getConfigValue('commerce-customer-group'),
    'x-api-key': await getConfigValue('commerce-x-api-key'),
  });

  events.on(
    'eds/lcp',
    () => {
      if (!product) {
        return;
      }

      setJsonLdProduct(product);
      setMetaTags(product);
      document.title = product.name;
    },
    { eager: true },
  );

  // Alert Message Wrapper
  const alertWrapper = document.createElement('div');
  alertWrapper.classList.add('product-details__alert');
  block.appendChild(alertWrapper);
  let inlineAlert;

  // PDP Wrapper
  const pdpWrapper = document.createElement('div');
  block.appendChild(pdpWrapper);

  // Render Containers
  try {
    return await productRenderer.render(ProductDetails, {
      sku: getSkuFromUrl(),
      carousel: {
        controls: {
          desktop: 'thumbnailsColumn',
          mobile: 'thumbnailsRow',
        },
        arrowsOnMainImage: true,
        peak: {
          mobile: true,
          desktop: false,
        },
        gap: 'small',
      },
      slots: {
        Actions: (ctx) => {
          // Add to Cart Button
          ctx.appendButton((next, state) => {
            const adding = state.get('adding');
            return {
              text: adding
                ? next.dictionary.Custom.AddingToCart?.label
                : next.dictionary.PDP.Product.AddToCart?.label,
              icon: 'Cart',
              variant: 'primary',
              disabled: adding || !next.data?.inStock || !next.valid,
              onClick: async () => {
                try {
                  state.set('adding', true);
                  await addProductsToCart([{ ...next.values }]);
                  // reset any previous alerts if successful
                  inlineAlert?.remove();
                } catch (error) {
                  // add alert message
                  inlineAlert = await UI.render(InLineAlert, {
                    heading: 'Error',
                    description: error.message,
                    icon: Icon({ source: 'Warning' }),
                    'aria-live': 'assertive',
                    role: 'alert',
                    onDismiss: () => {
                      inlineAlert.remove();
                    },
                  })(alertWrapper);
                  // Scroll the alertWrapper into view
                  alertWrapper.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                } finally {
                  state.set('adding', false);
                }
              },
            };
          });

          ctx.appendButton((next, state) => {
            const adding = state.get('adding');
            return ({
              disabled: adding,
              icon: 'Heart',
              variant: 'secondary',
              onClick: async () => {
                try {
                  state.set('adding', true);
                  const { addToWishlist } = await import('../../scripts/wishlist/api.js');
                  await addToWishlist(next.values.sku);
                } finally {
                  state.set('adding', false);
                }
              },
            });
          });
        },
      },
      useACDL: true,
    })(pdpWrapper);
  } catch (e) {
    console.error(e);
    await loadErrorPage();
  }
  return undefined;
}
