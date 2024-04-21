const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const{validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js");
const ExpressError = require("../utils/ExpressError.js");
const reviewController = require("../controllers/reviews.js");

//Reviews
//Post Route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createNewReview));

//Delete Review Route
  router.delete("/:reviewId",isReviewAuthor,wrapAsync(reviewController.destroyRoute))

module.exports = router;