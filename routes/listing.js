const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const{isLoggedIn} = require("../middleware.js"); 
const{isOwner,validateListing,validateReview} = require("../middleware.js");
const multer  = require('multer')
const {storage}= require("../cloudConfig.js");
const upload = multer({ storage}) 

 const listingController = require("../controllers/listings.js");

//Index Route
//Create Route
 router.route("/").get(wrapAsync(listingController.index))
 .post(isLoggedIn,upload.single('listing[image]'),validateListing,wrapAsync(listingController.createListing));
//  .post(,(req,res)=> {
//     res.send(req.file);
//  })
// 


//New Route 
router.get("/new",isLoggedIn,listingController.renderNewForm);


//Show Route
//Update Route
//Delete Route
router.route("/:id").get(wrapAsync(listingController.ShowListing))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),wrapAsync(listingController.updateListing))
.delete(isLoggedIn,wrapAsync(listingController.deleteListing));

 

//Edit Form Route
router.get("/:id/edit",isLoggedIn,wrapAsync(listingController.editRenderForm));
module.exports = router;
 

