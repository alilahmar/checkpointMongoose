const mongoose = require("mongoose");
//  Creation a model

const Schema = mongoose.Schema;
// const {Schema} = mongoose;

const Contact = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: String,
});
// module.exports = Contact = mongoose.model("contact", Contact);
module.exports = ContactUser = mongoose.model("contact", Contact);
