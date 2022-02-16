const { ResultWithContext } = require('express-validator/src/chain')
const connection = require('../../database')
const helpers = require('../../helpers/helpers')

const redirectPath = '/profile'

controller = {}

controller.renderProfile = async (req, res) => {
    const profile = await connection.query(`select * from users where id = ${req.user.id}`)
    res.render('auth/profile', {
        profile
    })
}

controller.editProfile = async (req, res) => {
    const { id } = req.params
    const { fullname, email, password } = req.body
    const newProfile = {
        fullname,
        email,
        password
    }
    newProfile.password = await helpers.encryptPassword(newProfile.password)
    try {
        await connection.query('update users set fullname = ?, email = ?, password = ? where id = ?',
        [newProfile.fullname, newProfile.email, newProfile.password, id])
        req.flash('success_msg', 'Se actualizo el perfil con exito')
        res.redirect(redirectPath)
    } catch (error) {
        console.log(error)
        req.flash('error_msg', 'Algo salio mal. Intentalo de nuevo')
    }
}

module.exports = controller