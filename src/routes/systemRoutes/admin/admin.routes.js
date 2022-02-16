const express = require('express')
const router = express.Router()

const descripcionesController = require('../../../controllers/systemControllers/admin/descripciones.controller')
const habilidadesController = require('../../../controllers/systemControllers/admin/habilidades.controller')
const proyectosController = require('../../../controllers/systemControllers/admin/proyectos.controller')

router.get('/descripciones', descripcionesController.renderDescripciones)
router.post('/descripciones/add', descripcionesController.saveDescripcion)
router.post('/descripciones/edit/:id', descripcionesController.editDescripcion)
router.get('/descripciones/delete/:id', descripcionesController.deleteDescripcion)

router.get('/habilidades', habilidadesController.renderHabilidades)
router.post('/habilidades/add', habilidadesController.saveHabilidad)
router.post('/habilidades/edit/:id', habilidadesController.editHabilidad)
router.get('/habilidades/delete/:id', habilidadesController.deleteHabilidad)

router.get('/proyectos', proyectosController.renderProyectos)
router.post('/proyectos/add', proyectosController.saveProyecto)
router.post('/proyectos/edit/:id', proyectosController.editProyecto)
router.get('/proyectos/delete/:id', proyectosController.deleteProyecto)

module.exports = router