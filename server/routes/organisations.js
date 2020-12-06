const express = require ("express");
const router = express.Router();
const Org = require ("../models/organisation")
router.get("/", (req,res)=>{
  res.json({msg:"hello"})
})
router.get("/org", (req, res) => {
  Org.find().then((org)=>{res.json(org)})
});

router.post("/org", (req, res) => {
  const organisation = new Org({
    logo: req.body.logo,
    name: req.body.name,
    category: req.body.category,
    website: req.body.website,
    location: req.body.location,
    description: req.body.description
  });

  organisation
    .save()
    .then((org) => {
      res.status(201).json(org);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});   

router.get("/org/:organisationId", (req, res) => {
  Org.findById(req.params.organisationId)
    .exec()
    .then((organisation) => {
      console.log("from database", organisation);
      if (organisation) {
        res.status(200).json(organisation);
      } else {
        res.status(404).json({ message: "not valid entry" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.put("/org/:organisationId", (req, res) => {
  const searchId = { _id: req.params.organisationId };
  delete req.body.id;
  const data = {};
  if (req.body.name) {
    data.name = req.body.name;
  }
  if (req.body.logo) {
    data.logo = req.body.logo;
  }
  if (req.body.category) {
    data.category = req.body.category;
  }
  if (req.body.website) {
    data.website = req.body.website;
  }
  if (req.body.location) {
    data.location = req.body.location;
  }
  if (req.body.description) {
    data.description = req.body.description;
  }
  const options = { returnOriginal: false };

  Org.findOneAndUpdate(searchId, { $set: data }, options)
    .exec()
    .then(() => {
      res.status(200).json({ message: "Organisation Updated" });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.delete("/org/:organisationId", (req, res) => {
  const id = req.params.organisationId;
  Org.remove({ _id: id })
    .exec()
    .then(() => {
      res.status(200).json({
        message: "Organisation deleted",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});


module.exports = router;



