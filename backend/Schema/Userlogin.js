const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
      mis: {
            required: true,
            type: String,
            unique: true,
      },
      password: {
            required: true,
            type: String,
      },
      username: {
        required: true,
        type: String,
  },
});

//create model
//users is name of collection
const User = mongoose.model('USER',userSchema);

module.exports=User;