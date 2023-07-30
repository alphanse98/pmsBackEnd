const planModel = require('../models/planModel')

// get plan
const getPlan = async(req,res)=>{
    try {
        const getData = await planModel.find({})
        res.status(200).json(getData)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// get plan by id 
const getPlanbyiD = async(req,res)=>{
    const id = req.params.id
    try {
        const getData = await planModel.findById(id)
        res.status(200).json(getData)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// create plan
const postPlan = async(req, res) => {
    try {
        const newPost = await planModel.create(req.body)
        res.status(200).json(newPost)
    } catch (error) {
        res.status(500).json({ message: "error" });
    }
}

// search plan 
const searchPlan = async (req, res) => {
    const search = req.params.search
    try {
        const getData = await planModel.find( {
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

module.exports = {getPlan, postPlan, getPlanbyiD, searchPlan}

