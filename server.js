const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const http = require("http");
const server = http.createServer(app);

const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require('cors')

const userRoute = require('./routes/userRoutes')
const planRoute = require('./routes/planRoutes')

const galleryRoute = require('./routes/galleryRoutes')

app.use(
  bodyParser.json({
    inflate: true,
    limit: "100kb",
    reviver: null,
    strict: true, 
    type: "application/json",
  })
);

app.use(cors())
const port = process.env.PORT || 4000
app.use(bodyParser.urlencoded({ extended: false }));

const uri = "mongodb+srv://planpvm:PvmPvm%40123@pvm.cztepnk.mongodb.net/?retryWrites=true&w=majority";



async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.use('/api',userRoute)

app.use('/api',planRoute)

app.use('/api',galleryRoute)


// Create a Mongoose schema for the "users" collection
// const userSchema = new mongoose.Schema(
//   {
//     name: String,
//     mobile: String,
//     email: String,
//     status: String,
//     Description: String,
//     date: Date,
//   },
//   { versionKey: false }
// );

// const imgSchema = new mongoose.Schema(
//   {
//     imgUrl : String,
//     pdfUrl : String,
//     title : String,
//     titleTwo : String,
//     titleThree : String,
//     titlefour : String,
//     metaData :String,
//     art : String,
//     description : String,
//   },
//   { versionKey: false }
// );

// Create a Mongoose model based on the userSchema
// const User = mongoose.model("User", userSchema);
// const Img = mongoose.model("Img",imgSchema);

// API endpoint for posting data
// app.post("/api/postusers", async (req, res) => {
//   try {
//     const userData = req.body;
//     userData.date = new Date();
//     const newUser = new User(userData);

//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true, // Use SSL
//       auth: {
//         user: "planpvm@gmail.com",
//         pass: "fskmevvnihhzqith",
//       },
//     });
//     // Define email options
//     const mailOptions = {
//       from: '"PVM"planpvm@gmail.com',
//       to: "esthakchella@gmail.com,alphanse98@gmail.com,muthumari0118@gmail.com",
//       subject: "User Details PVM",
//       text: `User personal details!\n \n Name: ${req.body.name} \n Mobile: ${req.body.mobile},\n Email: ${req.body.email},\n Status: ${req.body.status},\n Description: ${req.body.Description},\n Date: ${req.body.date}`,
//     };

//     // Send email
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log("email error", error);
//       } else {
//         console.log("Email sent: " + info.response);
//       }
//     });
    
//     await newUser.save();
//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error creating user" });
//   }
// });

// API endpoint for retrieving all data
// app.get("/api/getusers", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.status(200).json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error retrieving data" });
//   }
// });

// API endpoint for updating a user
// app.put("/api/updateusers/:id", async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const updateData = req.body;
//     const result = await User.updateOne({ id: userId }, updateData);

//     if (result.nModified === 0) {
//       res.status(404).json({ message: "User not found" });
//     } else {
//       res.status(200).json({ message: "User updated successfully" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error updating user" });
//   }
// });

// app.post("/api/postimg", async (req, res) => {
//   try {
//     const imgData = req.body;
//     const newImg = new Img(imgData);

//     await newImg.save();
//     res.status(201).json({ message: "Image created successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error creating image" });
//   }
// });

// app.get("/api/getimg", async (req, res) => {
//   try {
//     const imgData = await Img.find({});
//     res.status(200).json(imgData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error retrieving image data" });
//   }
// });


app.listen(port, () => {
  console.log(`Auth server running on port ${port}.`)
})

