const { schema } = require("../model/schema.js")

const register = async (req,res) =>{
const {username, email , password} = req.body

const user = await schema.create({
    username,
    email,
    password
})


}