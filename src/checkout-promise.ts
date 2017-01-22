import {loadScript} from './load-script';
import {StripeCheckoutInterface} from './checkout-definitions';
/**
 * Created by ronze on 1/22/2017.
 */
declare const StripeCheckout: StripeCheckoutInterface;
export const StripeCheckoutPromise: Promise<StripeCheckoutInterface> = loadScript('https://checkout.stripe.com/checkout.js').then(() => StripeCheckout);
