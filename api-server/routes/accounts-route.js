const express = require("express");
const app = express();

//Requiring Mongoose Model
const Account = require("../models/accounts");
const accountsRouter = express.Router();

// Get All Accounts
accountsRouter.route("/").get((req, res) => {
  Account.find((err, accounts) => {
    if (err) {
      res.send({ status: 404, message: "Unable to find accounts" });
    } else {
      res.status(200).json(accounts);
    }
  });
});

// Get Details of a specific Account
accountsRouter.route("/:id").get((req, res) => {
  Account.findById((err, accounts) => {
    if (err) {
      res.send({ status: 404, message: "Unable to find account" });
    } else {
      res.status(200).json(accounts);
    }
  });
});

// Create New Account
accountsRouter.route("/create").post((req, res) => {
  Account.create(req.body, (err, accounts) => {
    if (err) {
      res.send({ status: 404, message: "Unable to create account" });
    } else {
      res.status(201).json(accounts);
    }
  });
});

// Search Existing Accounts
accountsRouter.route("/:id").get((req, res) => {
  Account.findById(req.params.id, (err, accounts) => {
    if (err) {
      res.send({ status: 404, message: "Unable to locate account" });
    } else {
      res.json(accounts);
    }
  });
});

// Update Existing Account
accountsRouter.route("/:id").put((req, res) => {
  Account.findByIdAndUpdate(req.params.id, req.body, (err, accounts) => {
    if (err) {
      res.send({ status: 404, message: "Unable to update account" });
    } else {
      res.status(200).json(accounts);
    }
  });
});

// Delete Existing Account
accountsRouter.route("/:id").delete((req, res) => {
  Account.findByIdAndDelete(req.params.id, (err, accounts) => {
    if (err) {
      res.send({ status: 404, message: "Unable to delete account" });
    } else {
      console.log(`Account deleted!`);
      res.status(204).json(accounts);
    }
  });
});

// Mongoose Functions
// create, findById(), findByIdAndUpdate(), findOneAndRemove()

module.exports = accountsRouter;
