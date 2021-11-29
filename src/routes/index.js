const express = require('express')
const path = require('path')
const morgan = require('morgan')


// initializations
const app = express()
require('./database')

// settings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({
    extended: false
}))

//---------------------------------------------------------
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//---------------------------------------------------------

// routes
app.use('/', require('./routes/routes'))
app.use('/public', express.static(__dirname + '/public'))

// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})