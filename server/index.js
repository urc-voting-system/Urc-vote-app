const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const port = process.env.PORT || 3001;
const app = express();

const EventsRoutes = require("./routes/events");
const NomineesRoutes = require("./routes/nominees");

app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(port, () => console.log(`server running on port ${port}`));
  })
  .catch((err) => console.log(err));

// Routes
app.use("/events", EventsRoutes);
app.use("/nominees", NomineesRoutes);
