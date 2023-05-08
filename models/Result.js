const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  disease: {
    type: String,
    required: true,
  },
  remedies: {
    type: [String],
    required: true,
  },
  dermatologists: {
    type: [String],
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports =
  mongoose.models.Result || mongoose.model("Result", resultSchema);
