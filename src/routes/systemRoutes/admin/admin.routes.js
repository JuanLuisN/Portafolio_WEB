const express = require('express')
const router = express.Router()

const descripcionesController = require('../../../controllers/systemControllers/admin/descripciones.controller')
const habilidadesController = require('../../../controllers/systemControllers/admin/habilidades.controller')

router.get('/descripciones', descripcionesController.renderDescripciones)
router.post('/descripciones/add', descripcionesController.saveDescripcion)
router.post('/descripciones/edit/:id', descripcionesController.editDescripcion)
router.get('/descripciones/delete/:id', descripcionesController.deleteDescripcion)

router.get('/habilidades', habilidadesController.renderHabilidades)
router.post('/habilidades/add', habilidadesController.saveHabilidad)
router.post('/habilidades/edit/:id', habilidadesController.editHabilidad)
router.get('/habilidades/delete/:id', habilidadesController.deleteHabilidad)


module.exports = router