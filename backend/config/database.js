const mongoose = require('mongoose');

module.exports.connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://IE104:pass123@cluster0.tnbskjy.mongodb.net/IE104?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Success");
  } catch (error) {
    console.log("Error");
  }
}