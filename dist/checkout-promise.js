"use strict";
var load_script_1 = require("./load-script");
exports.StripeCheckoutPromise = load_script_1.loadScript('https://checkout.stripe.com/checkout.js').then(function () { return StripeCheckout; });
//# sourceMappingURL=checkout-promise.js.map