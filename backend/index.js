const express=require("express")
const mongoose = require ("mongoose");
const app = express();
app.use(express.json());
const cors=require("cors");
app.use(cors());
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1:27017/FinalProject");
const adminRoute=require("./Routes/AdminRoute");
const bookRoute=require("./Routes/BookRoute");
const cloudinary =require("cloudinary").v2;
const paymentRoute=require("./Routes/Payment");
const userRoute=require("./Routes/UserRoute");
app.use("/user", userRoute);

const RentRoute=require("./Routes/RentRoute")
app.use("/rents", RentRoute)

app.get("/user", (req,res)=>{
  res.send(process.env.GOOGLE_CLIENT_ID)
})




app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
      const response = await axios.post(
          'https://api.openai.com/v1/engines/davinci-codex/completions',
          {
              prompt: `You are a chatbot for a bookstore. A user asks: "${message}". Respond accordingly.`,
              max_tokens: 150,
          },
          {
              headers: {
                  'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
              },
          }
      );
      res.json({ reply: response.data.choices[0].text });
  } catch (error) {
      res.status(500).send(error.toString());
  }
});






const dotenv = require("dotenv");
dotenv.config();



cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET
});

app.get("/", (res, req)=>{
  req.send("welcome")
});



app.use("/admin", adminRoute)
app.use("/books", bookRoute)
app.use("/api/payment", paymentRoute)









app.listen(5002, () => {
  console.log('Server started on port 5002');
});













// app.post('/api/suggestions', async (req, res) => {
//   try {
//     // create a new suggestion document
//     const suggestion = new Suggestion(req.body);

//     // save the suggestion document to the database
//     await suggestion.save();

    // send the email using Nodemailer
    // const mailOptions = {
    //   from: 'your-email@gmail.com',
    //   to: 'user-email@example.com',
    //   subject: 'Suggestion Received',
    //   text: `Hello,\n\nWe have received your suggestion:\n\n${req.body.message}\n\nThank you for your feedback!`,
    // };

    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.error(error);
    //   } else {
    //     console.log('Email sent: ' info.response);
    //   }
    // });

    // return a success message
//     res.json({ message: 'Suggestion message sent' });
//   } catch (error) {
//     // return an error message if the email fails to send
//     res.json({ error: 'Error sending suggestion message' });
//   }
// });





// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'mdhrchoubey@gmail.com',
//     pass: 'your-password',
//   },
// });



// app.post('/create-user', async (req, res) => {
//   const { name, email, password } = req.body;
//   const user = new User({ name, email, password });
//   try {
//     await user.save();
//     res.status(201).send('User created successfully!');
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// });

// app.post('/upload-product', async (req, res) => {
//   const { name, description, price, image } = req.body;
//   const product = new Product({ name, description, price, image });
//   try {
//     await product.save();
//     res.status(201).send('Product uploaded successfully!');
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// });



// const express=require("express");
// const app=express();
// const cors=require("cors")
// app.use(cors())
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// const mongoose=require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/FinalProject");


// app.get("/", (req,res)=>{
//     res.send("hello")
// })


// app.listen(8050, ()=>{
//     console.log("server running on 8050")
// });









// const multer=require("multer");

// const stoage=multer.diskStorage({
//     destination:(req,file,cb)=> {
//         cb(null,'uploads/')
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     }
// })
// let upload=multer({storage:stoage});

