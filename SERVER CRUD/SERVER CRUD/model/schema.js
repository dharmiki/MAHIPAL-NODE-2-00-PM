const mongooose=require("mongoose")

const schema = mongooose.Schema({
    username :{
        type : String,
        require:true
    },
    email :{
        type:String,
        require:true,
        unique: true
    },
    password:{
        type:Number,
        require:true
    }

})
const projectschema = mongooose.model("project", schema)
module.exports = projectschema