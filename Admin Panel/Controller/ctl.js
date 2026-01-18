const schema = require("../model/Schema")

module.exports.dashboard = (req,res)=>{
    res.render("dashboard")
}

module.exports.form =(req,res)=>{
    res.render("Form")
}

module.exports.table = (req,res)=>{
    res.render("Table")
}

module.exports.postdata = async(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    req.body.profile = req.file.path
    await schema.create(req.body)
    .then(()=>{
        res.redirect("/table")
    })

}