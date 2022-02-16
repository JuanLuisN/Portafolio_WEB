const express = require('express')
const router = express.Router()

const authController = require('../../controllers/auth/auth.controller')

router.get('/admin', authController.renderSignin)
router.post('/signin', authController.signIn)

router.get('/logout', authController.logOut)

module.exports = router