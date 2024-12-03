import { CreditCardRenderConfig } from '@adobe-commerce/payment-services-sdk/payment';
import { SdkConfig } from '@adobe-commerce/payment-services-sdk';

export declare enum PaymentLocation {
    ProductDetail = "PRODUCT_DETAIL",
    MiniCart = "MINICART",
    Cart = "CART",
    Checkout = "CHECKOUT",
    Admin = "ADMIN"
}
export declare enum CardTypes {
    Visa = "visa",
    MasterCard = "mastercard",
    Amex = "amex"
}
export declare const CREDIT_CARD_CODE = "payment_services_paypal_hosted_fields";
export interface CreditCardProps extends SdkConfig, CreditCardRenderConfig {
    setSubmit: (fn: () => void) => void;
    onFormValidityChange?: (isFormValid: boolean) => void;
}
export declare const CreditCard: ({ location, apiUrl, getCartId, setSubmit, onSuccess, onError, onStart, onRender, getCustomerToken, onValidityChange, onFormValidityChange, onCardTypeChange, ...props }: CreditCardProps) => import("preact/compat").JSX.Element;
//# sourceMappingURL=CreditCard.d.ts.map