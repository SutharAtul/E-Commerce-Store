const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "ARSJUKeHfJLmIwdRCRdQZeQIas36GE1-WFcs7TxiSrqIDGFxU_X0VTqIVeIRWa_vqODf9WXQWT0orUZ4",
  client_secret: "ENL3ME_-8SatOoRxM4Ia1rCQu_3g937hnYIhLgxXojpLmJPtUz81W4BvleutFmbIKEiolKyeHBgIu-DB",
});

module.exports = paypal;
