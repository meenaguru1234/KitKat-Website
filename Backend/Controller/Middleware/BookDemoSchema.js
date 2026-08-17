const mongoose = require("mongoose")


const BookDemoSchema = new mongoose.Schema({
  
    name:{
        type:String,
        required:true
    },
    mob:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true
    },
    selectcourse:{
        type:String,
        enum:["MERN Stack", "Java Full Stack", "Python Full Stack", "UI/UX", "Data Science"],
        required:true
    }
})

module.exports = mongoose.model("BookDemaCollection", BookDemoSchema)