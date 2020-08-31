// mongodb model / schema

const mongoose = require("mongoose")
const schema = mongoose.Schema
const userSchema = new schema({
    username: {
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength: true
    }
},
{
    timestamps: true
}
);

const User = mongoose.model("user",userSchema);

module.exports=User;
