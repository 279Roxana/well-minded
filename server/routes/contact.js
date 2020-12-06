const express = require("express");
const router = express.Router();
const Contact = require("../models/contact.js");

// /api/contact
router.get("/", (req, res) => {
  res.json("message: success");
});

// /api/contact/messages
router.get("/messages", (req, res) => {
  Contact.find().then(contact => res.status(200).json(contact));
});

// /api/contact
router.post("/", (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    website: req.body.website,
    comment: req.body.comment,
    date: Date.now()
  });

  contact
    .save()
    .then(contact => {
      res.status(201).json(contact);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;