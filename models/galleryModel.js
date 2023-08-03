const mongoose = require('mongoose')

const gallerySchema = new mongoose.Schema(
    {
      heading: {
        type: String,
        required: true,
      },     
      content: {
        type: String,
        required: true,
      },
      dimension: String,  
      area: String,  
      facing: String,  
      vasthu: String,  
      details: Array,  
      filter: String,  
      imgPdfLocation: String,  
      isActive: Boolean,  
      premium: Boolean,  
      imgLocations: Array, 
      pdfLocation: String, 
      //seo 
      seoTitle: String,
      seoKeyWords: String,
      seoDiscription: String,
    },
    { versionKey: false }
  );

  const galleryModel = mongoose.model("gallery",gallerySchema)

  module.exports = galleryModel