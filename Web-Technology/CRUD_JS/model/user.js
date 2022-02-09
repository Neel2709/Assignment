const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    id:{
        type : Number,
        //required : true 
    },
    name:{
        type : String,
        //required : true 
    },
    address:{
        type : String,
        //required : true
    },
    mobile:{
        type :Number,
        //required : true
    },
    gender:{
        type : String,
        //required : true
    }
})

module.exports = mongoose.model('user',userSchema)