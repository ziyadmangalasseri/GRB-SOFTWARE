const mongoose=require('mongoose');

const AdminSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number']
    },
    googlelink: {
        type: String, // Use String type
        validate: {
          validator: function (v) {
            return /^(https?:\/\/)?(www\.)?google\.[a-z]+\/.+$/.test(v); // Validates if it's a Google URL
          },
          message: 'Please enter a valid Google link',
        }
    },
    password:{
        type:String,
        required:true,

    },
 },
  {timestamps:true},
);

module.exports = mongoose.model('Admin',AdminSchema);