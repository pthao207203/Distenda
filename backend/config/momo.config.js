module.exports = {
    partnerCode: "MOMO",
    accessKey: "F8BBA842ECF85",
    secretKey: process.env.MOMO_SECRET,
    redirectUrl: "http://localhost:3000/courses/handle-payment",
    ipnUrl: "https://distenda.onrender.com/pay/dummy-callback",
    requestType: "captureWallet",
    extraData: "",
    orderGroupId: "",
    autoCapture: true,
    lang: "vi"
  };
  