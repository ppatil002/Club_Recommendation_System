require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json
const jwt = require("jsonwebtoken");

// Connect to mongodb
const URI = process.env.MONGODB_URL;
mongoose.connect(
    "mongodb+srv://prerna_pratik:28_30@cluster0.retf1.mongodb.net/Club_Recommendation?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) console.log(err);
        console.log("Connected to MongoDB");
    }
);

const User = require("./Schema/Userlogin");

app.post("/userlogin", (req, res) => {
    const { mis, password, username } = req.body;
  
    User.findOne({ mis: mis }, (err, existinguser) => {
      if (existinguser) {
        if (password === existinguser.password) {
          let token;
          try {
            token = jwt.sign({ mis: mis }, "user_jwt_token", { expiresIn: "1h" });
          } catch (err) {
            res.send(err);
          }
  
          res.send({
            message: "Login successful !!",
            mis: mis,
            token: token,
            password: password,
            username: username
          });
        } else {
          res.send({ message: "incorrect credentials" });
        }
      } else {
        res.send({ message: "No such users" });
      }
    });
  });
  
  

app.get("/", (req, res) => {
    res.send("This is Club Recommendation System app");
});
const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log("Server is running on port", port);
});