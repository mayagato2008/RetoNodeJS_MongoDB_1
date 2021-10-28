'use strict'
const mongoose = require('mongoose')
const config = require('./config')
const app = require('./app')
//const port = process.env.PORT || 3000



//Conexión base de datos
mongoose.connect(config.db, (err,res) =>{
    if (err){
        return console.log(`Error al conectar a la BD: ${err}`)
    }
    console.log('Conexión a la BD establecida')
    //app.use(router);
    app.listen(config.port,()=>{
        console.log(`API REST corriendo en http://localcost:${config.port}`)
    })
})



