const connection = require('../../../database')

const redirectPath = '/descripciones'

controller = {}

controller.renderDescripciones = async (req, res) => {
    const descripciones = await connection.query('select * from descripciones order by id DESC')
    res.render('system/admin/adminDescripciones', {
        descripciones
    })
}

controller.saveDescripcion = async (req, res) => {
    const { descripcion } = req.body
    const newDescripcion = {
        descripcion
    }
    try {
        await connection.query('insert into descripciones set ?', [newDescripcion])
        req.flash('success_msg', 'Descripción agregada correctamente')
        res.redirect(redirectPath)
    } catch (error) {
        console.log(error)
        req.flash('error_msg', 'Algo salio mal. Intentalo de nuevo')
    }
}

controller.editDescripcion = async (req, res) => {
    const { id } = req.params
    const { descripcion } = req.body
    const newDescripcion = {
        descripcion
    }
    try {
        await connection.query('update descripciones set descripcion = ? where id = ?', 
            [newDescripcion.descripcion, id])
        req.flash('success_msg', 'Se actualizo la descripción con exito')
        res.redirect(redirectPath)
    } catch (error) {
        console.log(error)
        req.flash('error_msg', 'Algo salio mal. Intentalo de nuevo')
    }
}

controller.deleteDescripcion = async (req, res) => {
    const { id } = req.params
    try {
        await connection.query('delete from descripciones where id = ?', [id])
        req.flash('success_msg', 'Se elimino la descripcion con exito')
        res.redirect(redirectPath)
    } catch (error) {
        console.log(error)
        res.flash('error_msg', 'Algo salio mal. Intentalo de nuevo')
    }
}

module.exports = controller