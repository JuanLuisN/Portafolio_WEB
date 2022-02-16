const connection = require('../../../database')

const redirectPath = '/habilidades'

controller = {}

controller.renderHabilidades = async (req, res) => {
    const habilidades = await connection.query('select * from habilidades order by id DESC')
    res.render('system/admin/adminHabilidades', {
        habilidades
    })
}

controller.saveHabilidad = async (req, res) => {
    const { imagen, habilidad, descripcion } = req.body
    const newHabilidad = {
        imagen,
        habilidad,
        descripcion
    }
    try {
        await connection.query('insert into habilidades set ?', [newHabilidad])
        req.flash('success_msg', 'Habilidad agregada correctamente')
        res.redirect(redirectPath)
    } catch (error) {
        console.log(error)
        req.flash('error_msg', 'Algo salio mal. Intentalo de nuevo')
    }
}

controller.editHabilidad = async (req, res) => {
    const { id } = req.params
    const { imagen, habilidad, descripcion } = req.body
    const newHabilidad = {
        imagen,
        habilidad,
        descripcion
    }
    try {
        await connection.query('update habilidades set imagen = ?, habilidad = ?, descripcion = ? where id = ?', 
            [newHabilidad.imagen, newHabilidad.habilidad, newHabilidad.descripcion, id])
        req.flash('success_msg', 'Se actualizo la habilidad con exito')
        res.redirect(redirectPath)
    } catch (error) {
        console.log(error)
        req.flash('error_msg', 'Algo salio mal. Intentalo de nuevo')
    }
}

controller.deleteHabilidad = async (req, res) => {
    const { id } = req.params
    try {
        await connection.query('delete from habilidades where id = ?', [id])
        req.flash('success_msg', 'Se elimino la habilidad con exito')
        res.redirect(redirectPath)
    } catch (error) {
        console.log(error)
        res.flash('error_msg', 'Algo salio mal. Intentalo de nuevo')
    }
}


module.exports = controller