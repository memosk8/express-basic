'use strict'

const app = require('./app.js'),
    server = app.listen(app.get('port'), () => {
        console.log(`Iniciando express en puerto: ${app.get('port')}` );
    })