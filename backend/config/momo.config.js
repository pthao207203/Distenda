module.exports = {
    partnerCode: "MOMO",
    accessKey: "F8BBA842ECF85",
    secretKey: process.env.MOMO_SECRET,
    redirectUrl: "http://localhost:3000/courses/CoursePurchased",
    ipnUrl: "https://distenda.onrender.com/pay/callback",
    requestType: "captureWallet",
    extraData: "",
    orderGroupId: "",
    autoCapture: true,
    lang: "vi"
  };
  