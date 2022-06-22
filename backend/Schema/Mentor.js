const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
      password: {
            required: true,
            type: String,
      },
      username: {
        required: true,
        type: String,
        unique: true,
      },
      firstname: {
        required: true,
        type: String,
      },
      city:{
        required: true,
        type: String,
      },
      email:{
        required:true,
        type:String,
      },
      contactno:{
        required:true,
        type:String,
      },
      state:{
        required:true,
        type:String,
      },
      lastname: {
        required: true,
        type: String,    
      },
      year: {
            required: true,
            type: String,    
      },
      branch:{
            required: true,
            type: String,
      },
      education:{
        required: true,
        type: Array,
      },
      experience:{
        required: true,
        type: Array,
      },
      skills:{
        required: true,
        type: Array,
      },
      clubs:{
        required: true,
        type: Array,
      },
      work:{
        required: true,
        type: Array,
      },
});

//create model
//mentor is name of collection
const Mentor = mongoose.model('MENTOR',mentorSchema);

module.exports=Mentor;