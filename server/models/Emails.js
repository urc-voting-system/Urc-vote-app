const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const EmailModel = mongoose.model("email", EmailSchema);
module.exports = EmailModel;
