const connection = require('../../../database')

const redirectPath = '/proyectos'

controller = {}

controller.renderProyectos = async (req, res) => {
    const proyectos = await connection.query('select * from proyectos order by id DESC')
    res.render('system/admin/adminProyectos', {
        proyectos
    })
}

controller.saveProyecto = async (req, res) => {
    const { imagen, proyecto, fechaInicial, fechaFinal, descripcion, repositorio } = req.body
    const newProyecto = {
        imagen,
        proyecto,
        fecha: fechaInicial + ' | ' + fechaFinal,
        descripcion,
        repositorio
    }
    try {

        await connection.query('insert into proyectos set ?', [newProyecto])
        req.flash('success_msg', 'Proyecto agregado correctamente')
        res.redirect(redirectPath)
    } catch (error) {
        console.log(error)
        req.flash('error_msg', 'Algo salio mal. Intentalo de nuevo')
    }
}

controller.editProyecto = async (req, res) => {
    const { id } = req.params
    const { imagen, proyecto, descripcion, repositorio } = req.body
    const newProyecto = {
        imagen,
        proyecto,
        descripcion,
        repositorio
    }
    try {
        await connection.query('update proyectos set imagen = ?, proyecto = ?, descripcion = ?, repositorio = ? where id = ?', 
            [newProyecto.imagen, newProyecto.proyecto, newProyecto.descripcion, newProyecto.repositorio, id])
        req.flash('success_msg', 'Se actualizo el proyecto con exito')
        res.redirect(redirectPath)
    } catch (error) {
        console.log(error)
        req.flash('error_msg', 'Algo salio mal. Intentalo de nuevo')
    }
}

controller.deleteProyecto = async (req, res) => {
    const { id } = req.params
    try {
        await connection.query('delete from proyectos where id = ?', [id])
        req.flash('success_msg', 'Se elimino el proyecto con exito')
        res.redirect(redirectPath)
    } catch (error) {
        console.log(error)
        res.flash('error_msg', 'Algo salio mal. Intentalo de nuevo')
    }
}


module.exports = controller