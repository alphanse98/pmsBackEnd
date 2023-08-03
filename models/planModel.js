const mongoose = require('mongoose')

 const planShema = new mongoose.Schema(
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


  const planModel = mongoose.model("plan",planShema)

  module.exports = planModel