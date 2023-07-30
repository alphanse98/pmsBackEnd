const galleryModel = require("../models/galleryModel")

// get plan
const getgallery = async(req,res)=>{
    try {
        const getData = await galleryModel.find({})
        res.status(200).json(getData)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// get plan by id 
const getgalleryById = async(req,res)=>{
    const id = req.params.id
    try {
        const getData = await galleryModel.findById(id)
        res.status(200).json(getData)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


// post gallery 
const postGallery = async(req,res)=>{
    const newData = req.body
    try {
        const postData = await galleryModel.create(newData)
        res.status(200).json(postData)   
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const searchGallery = async (req, res) => {
    const search = req.params.search
    try {
        const getData = await galleryModel.find( {
            "$or":[
                {heading:{$regex:search}},
                {content:{$regex:search}},
                {dimension:{$regex:search}},
                {facing:{$regex:search}},
                {area:{$regex:search}},
                // {vasthu:{$regex:search}},
                {filter:{$regex:search}},
                {imgAlt:{$regex:search}},
                {seoDiscription:{$regex:search}},
                {seoKeyWords:{$regex:search}},
                {seoTitle:{$regex:search}},
            ]
        });
        res.status(200).json(getData);
    } catch (error) {
        res.status(500).json(error.message); 
    }
};

module.exports = {getgallery, postGallery, getgalleryById, searchGallery}
