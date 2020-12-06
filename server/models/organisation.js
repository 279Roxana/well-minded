const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrganisationSchema = new Schema({
  "logo": {
    type: String,
    required: true,
  },
  "name": {
    type: String,
    required: true,
  },
  "category": {
    type: String,
    required: true,
  },
  "website": {
    type: String,
    required: true,
  },
  "location": {
    type: String,
    required: true,
  },
  "description": {
    type: String,
    required: true,
  }
});
module.exports = Org = mongoose.model("Organisations", OrganisationSchema);
