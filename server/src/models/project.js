const mongoose = require("mongoose");
const project = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  description: {
    type: String,
  },
  projectImageUrl: {
    type: String,
  },
});
module.exports = mongoose.model("project", project);
