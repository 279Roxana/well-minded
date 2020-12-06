const express = require("express");
const router = express.Router();

const ResourceController = require("../controller/resources.js");

//@route GET and POST api/resources
router
  .route("/")
  .get(ResourceController.allResources)
  .post(ResourceController.addResources);

//@route GET , PATCH and DELETE api/resources/:id
router
  .route("/:resourceId")
  .get(ResourceController.getResourceById)
  .patch(ResourceController.updateResourceById)
  .delete(ResourceController.deleteResourceById);

module.exports = router;
