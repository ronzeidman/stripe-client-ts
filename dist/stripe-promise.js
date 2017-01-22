"use strict";
var load_script_1 = require("./load-script");
exports.StripePromise = load_script_1.loadScript('https://js.stripe.com/v2/').then(function () { return Stripe; });
//# sourceMappingURL=stripe-promise.js.map