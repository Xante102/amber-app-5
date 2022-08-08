const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const studentsRouter = require("./routes/students-route");
const accountsRouter = require("./routes/accounts-route");

// Mongoose connection setup
mongoose
  .connect("mongodb://localhost:27017/students")
  .then((x) => {
    console.log(
      `Connected to MongoDB Successfully! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err.reason);
  });

// Express App
const app = express();
app.use(cors(["*", "http://localhost:4200"]));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route Middlewares
app.use("/students", studentsRouter);
app.use("/accounts", accountsRouter);

// Setting up Port
const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}..`);
});
