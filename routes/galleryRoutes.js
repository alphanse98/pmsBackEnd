const express = require('express');
const router = express.Router();

const {getgallery, postGallery, getgalleryById, searchGallery} = require("../controllers/galleryControllers")

router.get("/gallery", getgallery)

router.get("/gallery/:id", getgalleryById)

router.get("/gallery/search/:search", searchGallery)

router.post("/gallery", postGallery)


module.exports = router