
const mailer = require("nodemailer")

const transport = mailer.createTransport({
    service :"gmail",
    auth :{
        user : "mishri1411804@gmail.com",
        pass :"cexxoompudxbiftf"
    }
})

module.exports.sendotp =(to,otp)=>{
    let mainoption ={
        to : to,
        from : "mishri1411804@gmail.com",
        subject :"Password Reset OTP",
        text : `${otp} This OTP is generted by MISHRI MALAVIYA `
    }
    transport.sendMail(mainoption)
}