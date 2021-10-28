'use strict'
const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//const PersonaCtrl = require('./controladores/Persona')
const router = require('./routes/index')

app.use('/',router)
//const router=express.Router()
//operaciones CRUD
//router.get('/',(req, res)=>{
//    res.send("Inicio de mi API de inscripción laboral - Jairo Maya");
//})



module.exports = app