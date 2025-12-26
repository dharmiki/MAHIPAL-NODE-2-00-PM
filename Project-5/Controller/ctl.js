const schema = require("../model/Schema")
const mailer = require("../middleware/mailer")
const passport = require("passport")

module.exports.login = (req, res) => {
    res.render("Login")
}
// aa pela jose ke email nd passwrd same che if same hoi then aa cookie ma storage karse
module.exports.auth = async (req, res) => {
    // console.log(req.body)
    req.flash("success", "login successfully")
    res.redirect("/dashboard")
}
module.exports.logout = (req, res) => {
    // res.clearCookie("admin")
    req.session.destroy()
    res.redirect("/")
}
// aa je if condition ma che aa restickion lagadse ke jya sudhi email ne password same ny hoi database mathi ne cookie ma Storage thase toh j dashboard ma bakki login page ma j rai 
module.exports.dashboard = (req, res) => {
    // cookie ni andr admin name ni key hoi toh aa dashboard ma jase or else home page 
    res.render("DashBoard")
}
module.exports.Form = (req, res) => {
    res.render("Form")
}
module.exports.table = async (req, res) => {
    await schema.find({})
        .then((ad) => {
            res.render("Table", { ad })
        })
}
module.exports.addData = async (req, res) => {
    // console.log(req.body)
    // console.log("File:", req.file); 
    req.body.image = req.file.path
    await schema.create(req.body)
        .then(() => {
            res.redirect("/table")
        })
}
module.exports.deleteadmin = async (req, res) => {
    // console.log(req.query.id)
    await schema.findByIdAndDelete(req.query.id)
        .then(() => {
            res.redirect("/table")
        })
}
module.exports.editadmin = async (req, res) => {
    // console.log(req.query.id)
    await schema.findById(req.query.id)
        .then((datas) => {
            res.render("Update", { datas })
        })
}

module.exports.updateAdmin = async (req, res) => {
    await schema.findByIdAndUpdate(req.body.id, req.body)
        .then(() => {
            res.redirect("/table")
        })
}

module.exports.profile = (req, res) => {
    res.render("profile")
}

module.exports.changepass = (req, res) => {
    res.render("changepassword")
}

module.exports.updatepassword = async (req, res) => {
    console.log(req.body)
    console.log(req.user)
    let admin = req.user  // login no data 
    if (admin.password == req.body.oldpass) {
        if (req.body.oldpass != req.body.newpass) {
            if (req.body.newpass == req.body.confirm) {
                await schema.findByIdAndUpdate(admin.id, { password: req.body.newpass }) //req.user ( je login kariyu che ee ) ni je id che aa id ma password ma newpass ne nakhi de 
                    .then(() => {
                        res.redirect("/logout")
                    })
            }
            else {
                res.redirect("/changepass")
            }
        }
        else {
            res.redirect("/changepass")

        }
    }
    else {
        res.redirect("/changepass")

    }
}

module.exports.ForgotPasswordpage = (req, res) => {
    res.render("ForgotPassword")
}

module.exports.Forgotpassword = async (req, res) => {
    let user = await schema.findOne({ email: req.body.email })
    console.log(user)
    if (!user) {
        res.redirect("/")
    }

    let OTP = Math.floor(Math.random() * 1000 + 4000)
    console.log(OTP)

    mailer.sendotp(user.email, OTP)
    req.session.userdata = user

    req.session.otp = OTP
    console.log(req.session.userdata)
    console.log(req.session.otp)

    res.render("OTPverify")

}

module.exports.Updatepass = async (req, res) => {
    console.log(req.body)
    let admin = req.session.userdata
    let otp = req.session.otp
    console.log(admin, otp)

    if (otp == req.body.otp) {
        if (req.body.NewPass == req.body.ConfirmPass) {
            await schema.findByIdAndUpdate(admin._id, { password: req.body.ConfirmPass })
                .then(() => {
                    res.redirect("/")
                })
        }
        else {
            res.redirect("/Forgotpassword")
        }
    }
    else {
        res.redirect("/Forgotpassword")

    }
}