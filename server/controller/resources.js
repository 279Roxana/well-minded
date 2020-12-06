const Resource = require("../models/resource.js");
module.exports = {
  allResources: (req, res) => {
    Resource.find()
      .sort({ _id: -1 })
      .then((resources) => res.status(200).json(resources));
  },
  addResources: (req, res) => {
    const resource = new Resource({
      name: req.body.name,
      description: req.body.description,
      website: req.body.website,
    });
    resource
      .save()
      .then((resource) => {
        res.status(201).json({
          message: "new resource created",
          resource: resource,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  },
  getResourceById: (req, res) => {
    Resource.findById(req.params.resourceId)
      .exec()
      .then((resource) => {
        console.log("from database", resource);
        if (resource) {
          res.status(200).json(resource);
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
  },
  updateResourceById: (req, res) => {
    const searchId = { _id: req.params.resourceId };
    delete req.body.id;
    const data = {};
    if (req.body.name) {
      data.name = req.body.name;
    }

    if (req.body.description) {
      data.description = req.body.description;
    }
    if (req.body.website) {
      data.website = req.body.website;
    }
    const options = { new: true };

    Resource.findOneAndUpdate(searchId, { $set: data }, options)
      .exec()
      .then((resource) => {
        res.status(200).json({
          message: "Resource Updated",
          resource: resource,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  },
  deleteResourceById: (req, res) => {
    const id = req.params.resourceId;
    Resource.deleteOne({ _id: id })
      .exec()
      .then(() => {
        res.status(200).json({
          message: "Resource deleted",
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  }
};