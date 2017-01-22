import {loadScript} from './load-script';
import {StripeInterface} from './stripe-definitions';
/**
 * Created by ronze on 1/22/2017.
 */
declare const Stripe: StripeInterface;
export const StripePromise: Promise<StripeInterface> = loadScript('https://js.stripe.com/v2/').then(() => Stripe);