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

const MentorDetails = require("./Schema/Mentor");

app.post("/mentorlogin",(req,res) => {
  const { username, password} = req.body;

  MentorDetails.findOne({username: username},(err, existingmentor) => {
    if(existingmentor){
      if(password == existingmentor.password){
        let token;
        try{
          token = jwt.sign({ username: username}, "mentor_jwt_token",{ expiresIn: "1h"});
        }
        catch(err){
          res.send(err);
        }

        res.send({
          message: "Mentor Login Successful",
          username: username,
          token: token,
          password: password,
        });
      }
      else{
        res.send({message:"incorrect credentials"});
      }
    }
    else{
      res.send({message:"No such mentor"});
    }
  })
})

//For getting list of all mentors
app.get("/mentorlist",(req,res) => {
  MentorDetails.find()
   .then((mentor) => res.json(mentor))
   .catch((err) => res.status(400).res.json(`Error:${err}`))
})

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
  
app.post("/register", (req,res) => {
  const {mis, password, username, firstname, lastname, year, branch} = req.body
  User.findOne({ mis : mis}, (err, user) => {
    if(user) {
      res.send({message: "User already registered"})
    }
    else{
      const user = new User({mis, password, username, firstname, lastname, year, branch})
      user.save(err => {
        if(err){
          res.send(err)
        }
        else{
          res.send({message: "Successfully Registered"})
        }
      })
    }
  })
})

app.put("/updatementorrr", (req, res) => {
  const {username,requestsreceived} = req.body
  var myquery = {username:username}
  var newvalues = {$set:{requestsreceived:requestsreceived}}
  MentorDetails.updateOne(myquery, newvalues,(err,item) => {
    if(err){
      res.send({message:"Error"});
    }
    else{
      res.send({message:"Request sent successfully !"})
    }
  })
});

app.post("/mentorregister",(req,res) => {
  const {password,username,firstname,city,email,state,lastname,year,branch,education,experience,skills,clubs,contactno,work,requestsreceived,requestsaccepted} = req.body
  MentorDetails.findOne({username:username},(err,mentor) => {
    if(mentor){
      res.send({message:"Mentor already registered"})
    }
    else{
      const mentor = new MentorDetails({password,username,firstname,city,email,state,lastname,year,branch,education,experience,skills,clubs,contactno,work,requestsreceived,requestsaccepted})
      mentor.save(err => {
        if(err){
          res.send(err)
        }
        else{
          res.send({message:"Mentor Successfully registered"})
        }
      })
    }
  })
})

app.get("/", (req, res) => {
    res.send("This is Club Recommendation System app");
});
const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log("Server is running on port", port);
});