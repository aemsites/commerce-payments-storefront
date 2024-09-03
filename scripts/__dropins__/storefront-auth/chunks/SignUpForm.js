import{jsx as i,jsxs as k}from"@dropins/tools/preact-jsx-runtime.js";import{Slot as ce,classes as le}from"@dropins/tools/lib.js";import"@dropins/tools/event-bus.js";import"@dropins/tools/recaptcha.js";import{g as fe,c as de,a as ge}from"./createCustomerAddress.js";import{useState as b,useEffect as he,useCallback as G}from"@dropins/tools/preact-hooks.js";import{s as ee,b as pe,c as Fe}from"./simplifyTransformAttributesForm.js";import{v as Ue,u as be,a as ye}from"./usePasswordValidationMessage.js";import{a as _e}from"./getCustomerToken.js";import{p as te,E as re}from"./getStoreConfig.js";import{c as H,g as Te,u as Ne,T as Le,F as xe,B as ie}from"./useInLineAlert.js";import{InLineAlert as Pe,InputPassword as Ee,Field as Q,Checkbox as X}from"@dropins/tools/components.js";import{S as Se}from"./SkeletonLoader.js";import{E as we}from"./EmailConfirmationForm.js";import{useText as ve}from"@dropins/tools/i18n.js";const se=(e,t)=>t!=null&&t.length?e.map(s=>{var r;const a=(r=t.find(({code:y})=>y===s.code))==null?void 0:r.defaultValue;return a?{...s,defaultValue:a}:s}):e,Me=({inputsDefaultValueSet:e,fieldsConfigForApiVersion1:t,apiVersion2:s})=>{const[a,r]=b([]);return he(()=>{(async()=>{if(s){const u=await fe("customer_account_create");if(u!=null&&u.length)if(e!=null&&e.length){const m=se(u,e);r(m)}else r(u)}else{const u=ee(pe),m=ee(t),h=se(u,e);r(t&&t.length?m:h)}})()},[s,t,e]),{fieldsListConfigs:a}},Ae=e=>{switch(e){case"true":case"on":return!0;case"false":case"off":return!1;default:return e}},qe=(e,t)=>{if(!t)return e;const s={};s.custom_attributes=[];for(const a in e)Object.prototype.hasOwnProperty.call(Fe,a)?s[a]=e[a]:s.custom_attributes.push({attribute_code:a,value:Ae(e[a])});return s},Ce=({addressesData:e,translations:t,isEmailConfirmationRequired:s,apiVersion2:a=!0,passwordConfigs:r,isAutoSignInEnabled:y,routeRedirectOnSignIn:u,routeSignIn:m,onErrorCallback:h,onSuccessCallback:n,setActiveComponent:l,handleSetInLineAlertProps:f,routeRedirectOnEmailConfirmationClose:x})=>{const[O,w]=b(""),[p,o]=b(!1),[c,T]=b({userName:"",status:!1}),[v,d]=b(""),[M,A]=b(!1),[V,F]=b(!1),[q,C]=b(!0),P=G(({target:U})=>{C(U.checked)},[]),I=G(()=>{if(H(l)){l("signInForm");return}H(m)&&(window.location.href=m())},[l,m]),W=G(U=>{d(U)},[]),j=G(()=>{f(),d(""),H(x)?window.location.href=x():(o(!1),l==null||l("signInForm"))},[f,x,l]);return{isKeepMeLogged:q,userEmail:O,showEmailConfirmationForm:p,isSuccessful:c,isClickSubmit:M,signUpPasswordValue:v,isLoading:V,onSubmitSignUp:async(U,$)=>{var Z,z,D;if(f(),F(!0),!$){A(!0),F(!1);return}const B=a?"createCustomerV2":"createCustomer",_=Te(U.target),{email:E,password:S,is_subscribed:ae}=_,oe=(r==null?void 0:r.requiredCharacterClasses)||0,ue=(r==null?void 0:r.minLength)||1;if(!Ue(S,oe)||ue>(S==null?void 0:S.length)){A(!0),F(!1);return}const ne=qe({..._,is_subscribed:!!ae||!1},a),{data:N,errors:L}=await de(ne,a),K=((z=(Z=N==null?void 0:N.createCustomer)==null?void 0:Z.customer)==null?void 0:z.firstname)||"";if(L&&(L!=null&&L.length))f==null||f({type:"error",text:L[0].message}),h==null||h(L),te(re.CREATE_ACCOUNT_EVENT,{updateProfile:!1}),w(E);else{const J={email:"",...N==null?void 0:N[B]};if(te(re.CREATE_ACCOUNT_EVENT,{email:J==null?void 0:J.email,updateProfile:!0}),s||!y){if(n==null||n({userName:K,status:!0}),s){(D=U.target)==null||D.reset(),d(""),o(!0),w(E),F(!1);return}if(!y){F(!1),T({userName:K,status:!0});return}}const g=await _e({email:E,password:S,translations:t,handleSetInLineAlertProps:f,onErrorCallback:h});if(g!=null&&g.userName){if(e!=null&&e.length)for(const R of e)try{await ge(R)}catch(me){console.error(t.failedCreateCustomerAddress,R,me)}H(u)?window.location.href=u():(n==null||n({userName:g==null?void 0:g.userName,status:!0}),T({userName:g==null?void 0:g.userName,status:!0}))}else n==null||n({userName:K,status:!0}),T({userName:K,status:!0})}F(!1)},signInButton:I,handleSetSignUpPasswordValue:W,onKeepMeLoggedChange:P,handleHideEmailConfirmationForm:j}},Ze=({addressesData:e,formSize:t="default",inputsDefaultValueSet:s,fieldsConfigForApiVersion1:a,apiVersion2:r=!0,isAutoSignInEnabled:y=!0,displayTermsOfUseCheckbox:u=!1,displayNewsletterCheckbox:m=!1,hideCloseBtnOnEmailConfirmation:h=!1,routeRedirectOnEmailConfirmationClose:n,routeRedirectOnSignIn:l,routeSignIn:f,onErrorCallback:x,onSuccessCallback:O,setActiveComponent:w,slots:p})=>{const o=ve({title:"Auth.SignUpForm.title",buttonPrimary:"Auth.SignUpForm.buttonPrimary",buttonSecondary:"Auth.SignUpForm.buttonSecondary",privacyPolicyDefaultText:"Auth.SignUpForm.privacyPolicyDefaultText",subscribedDefaultText:"Auth.SignUpForm.subscribedDefaultText",keepMeLoggedText:"Auth.SignUpForm.keepMeLoggedText",customerTokenErrorMessage:"Auth.Api.customerTokenErrorMessage",failedCreateCustomerAddress:"Auth.SignUpForm.failedCreateCustomerAddress",placeholder:"Auth.InputPassword.placeholder",floatingLabel:"Auth.InputPassword.floatingLabel"}),{passwordConfigs:c,isEmailConfirmationRequired:T}=be(),{fieldsListConfigs:v}=Me({fieldsConfigForApiVersion1:a,apiVersion2:r,inputsDefaultValueSet:s}),{inLineAlertProps:d,handleSetInLineAlertProps:M}=Ne(),{isKeepMeLogged:A,userEmail:V,showEmailConfirmationForm:F,isSuccessful:q,isClickSubmit:C,signUpPasswordValue:P,isLoading:I,onSubmitSignUp:W,signInButton:j,handleSetSignUpPasswordValue:Y,onKeepMeLoggedChange:U,handleHideEmailConfirmationForm:$}=Ce({addressesData:e,translations:o,isEmailConfirmationRequired:T,apiVersion2:r,passwordConfigs:c,isAutoSignInEnabled:y,routeRedirectOnSignIn:l,routeSignIn:f,onErrorCallback:x,onSuccessCallback:O,setActiveComponent:w,handleSetInLineAlertProps:M,routeRedirectOnEmailConfirmationClose:n}),{isValidUniqueSymbols:B,defaultLengthMessage:_}=ye({password:P,isClickSubmit:C,passwordConfigs:c}),E=!T&&(e==null?void 0:e.length);return!v.length&&r?i("div",{className:`auth-signUpForm ${t} skeleton-loader`,"data-testid":"SignUpForm",children:i(Se,{activeSkeleton:"signUpForm"})}):q.status&&(p!=null&&p.SuccessNotification)?i(ce,{"data-testid":"successNotificationTestId",name:"SuccessNotification",slot:p==null?void 0:p.SuccessNotification,context:{isSuccessful:q}}):F?i(we,{formSize:t,userEmail:V,inLineAlertProps:d,hideCloseBtnOnEmailConfirmation:h,handleSetInLineAlertProps:M,onPrimaryButtonClick:$}):k("div",{className:le(["auth-signUpForm",t]),"data-testid":"SignUpForm",children:[i(Le,{text:o.title,bottomLine:!1,className:"auth-signUpForm__title"}),d.text?i(Pe,{className:"auth-signUpForm__notification",type:d.type,variant:"secondary",heading:d.text,icon:d.icon}):null,k(xe,{submitCallback:W,className:"auth-signUpForm__form",isLoading:I,name:"signUp_form",fieldsConfig:v,children:[i(Ee,{validateLengthConfig:_,className:"auth-signUpForm__form__field",autoComplete:"current-password",name:"password",minLength:c==null?void 0:c.minLength,error:B==="error"||(_==null?void 0:_.status)==="error"||C&&P.length<=0,defaultValue:P,uniqueSymbolsStatus:B,requiredCharacterClasses:c==null?void 0:c.requiredCharacterClasses,onValue:Y,placeholder:o.placeholder,floatingLabel:o.floatingLabel,children:E?i("div",{className:"auth-signUpForm__automatic-login",children:i(Q,{children:i(X,{name:"",placeholder:o.keepMeLoggedText,label:o.keepMeLoggedText,checked:A,onChange:U})})}):null}),m||u?k("div",{className:"auth-signUpForm__item auth-signUpForm__checkbox",children:[m?i(Q,{children:i(X,{"data-testid":"isSubscribed",name:"is_subscribed",placeholder:o.subscribedDefaultText,label:o.subscribedDefaultText})}):null,u?i(Q,{children:i(X,{"data-testid":"privacyPolicy",name:"privacyPolicy",placeholder:o.privacyPolicyDefaultText,label:o.privacyPolicyDefaultText})}):null]}):null,k("div",{className:"auth-signUpForm-buttons",children:[i(ie,{type:"button",variant:"tertiary",style:{padding:0},buttonText:o.buttonSecondary,enableLoader:!1,onClick:j}),i(ie,{type:"submit",buttonText:o.buttonPrimary,variant:"primary",enableLoader:I})]})]}),i("div",{id:"createCustomerV2"})]})};export{Ze as S};