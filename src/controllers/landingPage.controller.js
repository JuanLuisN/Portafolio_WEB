const connection = require('../database')

controller = {}

controller.renderLandingPage = async (req, res) => {
    const descripciones = await connection.query('select * from descripciones order by id desc limit 1')
    const habilidades = await connection.query('select * from habilidades order by id desc')
    const proyectos = await connection.query('select * from proyectos')
    res.render('index', {
        descripciones, habilidades, proyectos
    })
}

module.exports = controller