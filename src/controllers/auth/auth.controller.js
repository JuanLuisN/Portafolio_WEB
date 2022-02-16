const passport = require('passport')
const connection = require('../../database')

controller = {}

controller.renderSignin = (req, res) => {
    res.render('auth/signin')
}

controller.signIn = (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/',
        failureRedirect: '/admin',
        failureFlash: true
    })(req, res, next)
}

controller.logOut = (req, res, next) => {
    req.logOut()
    res.redirect('/')
}

module.exports = controller