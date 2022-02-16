const express = require('express')
const router = express.Router()

const descripcionesController = require('../../../controllers/systemControllers/admin/descripciones.controller')

router.get('/descripciones', descripcionesController.renderDescripciones)
router.post('/descripciones/add', descripcionesController.saveDescripcion)
router.post('/descripciones/edit/:id', descripcionesController.editDescripcion)
router.get('/descripciones/delete/:id', descripcionesController.deleteDescripcion)

module.exports = router