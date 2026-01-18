const mongoose = require("mongoose")
const schema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    profile :{
        type : String,
        required : true
    }

})

const firstSchema = mongoose.model("Data",schema)
module.exports = firstSchema