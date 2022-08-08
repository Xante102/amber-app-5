const express = require("express");
const app = express();

//Requiring Mongoose Model
const Student = require("../models/students");
const studentsRouter = express.Router();

// Get All Students
studentsRouter.route("/").get((req, res) => {
  Student.find((err, students) => {
    if (err) {
      res.send({ status: 404, message: "Unable to find students" });
    } else {
      res.status(200).json(students);
    }
  });
});

// Get Details of a specific Student
studentsRouter.route("/:id").get((req, res) => {
  Student.findById(req.params.id, (err, students) => {
    if (err) {
      res.send({ status: 404, message: "Unable to find student" });
    } else {
      res.status(200).json(students);
    }
    
  });
});

// Create New Student
studentsRouter.route("/create").post((req, res) => {
  Student.create(req.body, (err, students) => {
    if (err) {
      res.send({ status: 404, message: "Unable to create student" });
    } else {
      res.status(201).json(students);
    }
  });
});


// Update Existing Student
studentsRouter.route("/:id").put((req, res) => {
  Student.findByIdAndUpdate(req.params.id, req.body, (err, students) => {
    if (err) {
      res.send({ status: 404, message: "Unable to update student" });
    } else {
      res.status(200).json(students);
    }
  });
});

// Delete Existing Student
studentsRouter.route("/:id").delete((req, res) => {
  Student.findByIdAndDelete(req.params.id, (err, students) => {
    if (err) {
      res.send({ status: 404, message: "Unable to delete student" });
    } else {
      console.log(`Student deleted!`);
      res.status(204).json(students);
    }
  });
});

// Mongoose Functions
// create, findById(), findByIdAndUpdate(), findOneAndRemove()

module.exports = studentsRouter;
