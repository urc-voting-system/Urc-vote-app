const express = require("express");
const router = express.Router();
const EventModel = require("../models/Event");

// add new event
router.post("/new", async (req, res) => {
  try {
    const event = await EventModel.create(req.body);
    if (event) {
      return res.status(200).json({ message: "event created" });
    }
    res.json({ message: "event not created" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "could not send new event to database" });
  }
});

// get all events
router.get("/", async (req, res) => {
  try {
    const events = await EventModel.find({});
    return res.status(200).send(events);
  } catch (error) {
    return res.send(error);
  }
});

// get one event
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const event = await EventModel.findById(id);
    return res.status(200).send(event);
  } catch (error) {
    return res.send(error);
  }
});

// // update event
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const event = await EventModel.findByIdAndUpdate(id, req.body);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    } else {
      const updatedEvent = await EventModel.findById(id);
      return res.status(200).json(updatedEvent);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// delete donation
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const event = await EventModel.findByIdAndDelete(id);

  if (!event) {
    return res.status(404).json({ message: "Event Not Found" });
  }
  return res.status(200).json({ message: "Event Deleted" });
});

module.exports = router;
