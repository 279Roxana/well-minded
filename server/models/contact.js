const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  "name": {
    type: String,
    required: true,
  },
  "email": {
    type: String,
    required: true,
  },
  "website": {
    type: String
  },
  "comment": {
    type: String,
    required: true,
  },
  "date":{
    type: Date,
    default: Date.now
  }
});
module.exports = Contact = mongoose.model("contact", ContactSchema);