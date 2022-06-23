const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
      name: {
            required: true,
            type: String,
            unique: true,
      },
      information:{
        required:true,
        type:String,
      }
});

//create model
//users is name of collection
const Club = mongoose.model('CLUB',clubSchema);

module.exports=Club;
