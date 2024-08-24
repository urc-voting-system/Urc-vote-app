const express = require("express");
const router = express.Router();
const NomineeModel = require("../models/Nominees");
const EmailModel = require("../models/Emails");

// get all nominees
router.get("/", async (req, res) => {
  try {
    const nominees = await NomineeModel.find({});
    return res.status(200).send(nominees);
  } catch (error) {
    return res.send(error);
  }
});

// add new nominee
router.post("/new", async (req, res) => {
  try {
    const { eventNumber, categoryNumber, eventName, nomineeName, nomineeImg } =
      req.body;

    // Basic validation
    if (
      !eventNumber ||
      !categoryNumber ||
      !nomineeName ||
      !nomineeImg ||
      !eventName
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create the nominee
    const nominee = await NomineeModel.create(req.body);
    if (nominee) {
      return res.status(200).json({ message: "Nominee created successfully" });
    }
    res.status(400).json({ message: "Nominee not created" });
  } catch (error) {
    console.error("Error creating nominee:", error);
    return res
      .status(500)
      .json({ message: "Could not send new nominee to database" });
  }
});

// update nominee Votes count
router.put("/:id/update", async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;

    // Check if the email already exists in the EmailModel
    const emailExists = await EmailModel.findOne({ email: email });
    if (emailExists) {
      return res.status(400).json({ message: "This email has voted already." });
    }

    // Increment the vote count by 1
    const updatedNominee = await NomineeModel.findByIdAndUpdate(
      id,
      { $inc: { votesCount: 1 } }, // Increment votesCount by 1
      { new: true } // Return the updated document
    );

    if (!updatedNominee) {
      return res.status(404).json({ message: "Nominee not found" });
    }

    // Add the email to the EmailModel
    await EmailModel.create({ email: email });

    // Return the updated nominee data
    return res.status(200).json(updatedNominee);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
