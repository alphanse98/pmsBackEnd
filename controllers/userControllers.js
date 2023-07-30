const userModel = require('../models/userModel')

const getUser = async (req, res) => {
    try {
      const users = await userModel.find({});
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error retrieving data" });
    }
}


const postuser = async(req, res) => {
  try {
      // const reqData = req.body
      const newPost = await userModel.create(req.body)
      res.status(200).json(newPost)
  } catch (error) {
      res.status(500).json({ message: "error" });
  }
}
  module.exports = {getUser, postuser}


  