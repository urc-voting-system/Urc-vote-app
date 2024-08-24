const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    bannerImg: {
      type: String,
      required: true,
    },
    categories: [
      {
        catName: {
          type: String,
          required: true,
        },
        catDesc: {
          type: String,
          required: true,
        },
        // nominees: [
        //   {
        //     name: {
        //       type: String,
        //       required: true,
        //     },
        //     image: {
        //       type: String,
        //       required: true,
        //     },
        //   },
        // ],
      },
    ],
  },
  { timestamps: true }
);

const EventModel = mongoose.model("event", EventSchema);
module.exports = EventModel;
