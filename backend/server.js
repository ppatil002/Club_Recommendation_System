require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
const bodyParser = require('body-parser')
require("dotenv").config();


app.use(bodyParser.json()) // for parsing application/json
const jwt = require("jsonwebtoken");

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
  });
 }

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

const Club = require("./Schema/Clubs");

app.post("/api/clubdetails",(req,res) => {
  const {name,information,why} = req.body;

  Club.findOne({ name : name}, (err, user) => {
    if(user) {
      res.send({message: "Already added"})
    }
    else{
      const user = new Club({name,information,why})
      user.save(err => {
        if(err){
          res.send(err)
        }
        else{
          res.send({message: "Successfully Added"})
        }
      })
    }
  })
})

app.post("/api/mrr",(req,res) => {
  const {username} = req.body
  MentorDetails.findOne({username:username},(err,mentor) => {
    if(mentor){
      res.send({requestsreceived:mentor.requestsreceived,requestsaccepted:mentor.requestsaccepted})
    }
    else{
      if(err){
        res.send(err)
      }
      else{
        res.send({message:"Error"})
      }
    }
  })
})

app.post("/api/mra",(req,res) => {
  const {username} = req.body
  MentorDetails.findOne({username:username},(err,mentor) => {
    if(mentor){
      res.send({requestsaccepted:mentor.requestsaccepted})
    }
    else{
      if(err){
        res.send(err)
      }
      else{
        res.send({message:"Error"})
      }
    }
  })
})


app.post("/api/mentorlogin",(req,res) => {
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
app.get("/api/mentorlist",(req,res) => {
  MentorDetails.find()
   .then((mentor) => res.json(mentor))
   .catch((err) => res.status(400).res.json(`Error:${err}`))
})

app.get("/api/clublist",(req,res) => {
  Club.find()
  .then((club) => res.json(club))
   .catch((err) => res.status(400).res.json(`Error:${err}`))
})

app.get("/api/studentlist",(req,res) => {
  User.find()
  .then((user) => res.json(user))
   .catch((err) => res.status(400).res.json(`Error:${err}`))
})

app.post("/api/userlogin", (req, res) => {
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
  
app.post("/api/register", (req,res) => {
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

app.put("/api/updatementorrr", (req, res) => {
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

app.put("/api/updatementorra", (req, res) => {
  const {username,requestsaccepted} = req.body
  console.log(username,requestsaccepted)
  var myquery = {username:username}
  var newvalues = {$set:{requestsaccepted:requestsaccepted}}
  MentorDetails.updateOne(myquery, newvalues,(err,item) => {
    if(err){
      res.send({message:"Error"});
    }
    else{
      res.send({message:"Request sent successfully !"})
    }
  })
});

app.post("/api/mentorregister",(req,res) => {
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

app.get("/api", (req, res) => {
    res.send("This is Club Recommendation System app");
});
const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log("Server is running on port", port);
});