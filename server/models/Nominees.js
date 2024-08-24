const mongoose = require("mongoose");

const NomineeSchema = new mongoose.Schema(
  {
    eventNumber: {
      type: String,
      required: true,
    },
    categoryNumber: {
      type: String,
      required: true,
    },
    eventName: {
      type: String,
      required: true,
    },
    // categoryName: {
    //   type: String,
    //   required: true,
    // },
    nomineeName: {
      type: String,
      required: true,
    },
    nomineeImg: {
      type: String,
      required: true,
    },
    votesCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const NomineeModel = mongoose.model("nominee", NomineeSchema);
module.exports = NomineeModel;
