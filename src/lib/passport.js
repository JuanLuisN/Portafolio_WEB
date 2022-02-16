const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const helpers = require('../helpers/helpers')
const connection = require('../database')

passport.use('local.signin', new LocalStrategy({
    usernameField: 'correo',
    passwordField: 'contra',
    passReqToCallback: true,
}, async (req, correo, contra, done) => {
    const rows = await connection.query(`select * from users where email = '${correo}'`)
    if(rows.length > 0){
        const user = rows[0]
        const validPass = await helpers.mathPassword(contra, user.password)
        if(validPass){
            done(null, user, req.flash('success_msg', `Bienvenido ${user.fullname}`))
        }else{
            done(null, false, req.flash('error_msg', 'Contraseña incorrecta. Intente de nuevo'))
        }
    }else{
        return done(null, false, req.flash('error_msg', 'El correo electronico no existe'))
    }
}))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    const rows = await connection.query(`select * from users where id = ${id}`)
    done(null, rows[0])
})