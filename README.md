# stripe-client-ts
Import and ts definitions for Stripe.js

Stripe.js usage:
```ts
import {StripePromise} from 'stripe-client-ts/dist/stripe-promise';

... somewhere ...

StripePromise.then(Stripe => {
    ...
})

or

const Stripe = await StripePromise;
...
```

Checkout usage:

```ts
import {StripeCheckoutPromise} from 'stripe-client-ts/dist/checkout-promise';

... somewhere ...

StripeCheckoutPromise.then(StripeCheckout => {
    ...
})

or

const StripeCheckout = await StripeCheckoutPromise;
...
```