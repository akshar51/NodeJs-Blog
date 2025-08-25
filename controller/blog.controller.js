const User = require("../model/userAuth")

module.exports.homePage = (req,res)=>{
    res.render('pages/index')
}

module.exports.signupPage = (req,res)=>{
    res.render('pages/signup')
}

module.exports.loginPage = (req,res)=>{
    res.render('pages/login')
}

module.exports.signup = async (req,res)=>{
    try {
        let user = await User.create(req.body)
        console.log(user)
        res.redirect('/login')
    } catch (error) {
        console.log(error)
        res.redirect('/signup')
    }
}