'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PersonaSchema = Schema({
    tipoDoc: { type: String, enum:['CC','TI','CE','OTRO'] },
    docIdent: String,
    nombres: String,
    apellidos: String,
    direccion: String,
    telFijo: String,
    celular: String,
    sitioWeb: String,
    perfil: String
})

module.exports = mongoose.model('Persona',PersonaSchema)