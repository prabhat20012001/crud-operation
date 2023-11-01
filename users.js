const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practice", {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
});

const userSchema = new mongoose.Schema({

  username: String,
  name: String,
  email: String,
  password:String,
  extraField: String,

},{timestamps:true});

module.exports = mongoose.model("User", userSchema);
