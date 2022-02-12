const express = require('express')
const morgan = require('morgan')

//Initializations
const app = express()

//Settings
app.set('port', process.env.PORT || 7000)

//Middlewares
app.use(morgan('dev'))

//Global variables

//Routes

//Public

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})