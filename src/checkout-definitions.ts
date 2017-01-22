import {StripeCardCreateTokenResponse} from './stripe-definitions';
/**
 * Created by ronze on 1/22/2017.
 */

export interface StripeCheckoutArgs {
    stripeBillingName: string;
    stripeBillingAddressLine1: string;
    stripeBillingAddressZip: string;
    stripeBillingAddressState: string;
    stripeBillingAddressCity: string;
    stripeBillingAddressCountry: string;

    stripeShippingName: string;
    stripeShippingAddressLine1: string;
    stripeShippingAddressZip: string;
    stripeShippingAddressState: string;
    stripeShippingAddressCity: string;
    stripeShippingAddressCountry: string;
}

export interface StripeCheckoutHandler {
    open(options: {name: string, description?: string, amount: number}): void;
    close(): void;
}

export interface StripeCheckoutOptions {
    key: string;
    token: (token: StripeCardCreateTokenResponse, args: StripeCheckoutArgs) => void;

    image?: string;
    name?: string;
    description?: string;
    amount?: number; //in cents
    locale?: string;
    zipCode?: boolean;
    billingAddress?: boolean;

    currency?: string;
    panelLabel?: string;
    shippingAddress?: boolean;
    email?: string;
    allowRememberMe?: boolean;
    bitcoin?: boolean;
    alipay?: boolean|'auto';
    alipayReusable?: boolean;
    opened?: () => void;
    closed?: () => void;
}

export interface StripeCheckoutInterface {
    configure(options: StripeCheckoutOptions): StripeCheckoutHandler;
}
