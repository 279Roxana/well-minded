const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
});

module.exports = Resource = mongoose.model("resources", ResourceSchema);