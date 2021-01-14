const mongoose = require("mongoose");


const AuthorsSchema = new mongoose.Schema(
    {
       name:{
        type:String,
        required: [true, "{PATH} is required"],
        minlength: [1, "{PATH} must be at least {MINLENGTH}"]
        }


},{timestamps: true});


const Author = mongoose.model("Author", AuthorsSchema);

module.exports = Author;