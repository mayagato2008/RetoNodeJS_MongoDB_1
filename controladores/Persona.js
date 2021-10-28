'use strict'

const Persona = require('../modelos/Persona');

function getPersona (req,res){
    let personaId=req.params.personaId

    Persona.findById(personaId, (err, datos)=> {
        if(err) res.status(500).send({ message: `Error en la petición a la BD: ${err} `})
        if(!datos) return res.status(404).send({ message: `La persona no existe`})
        
        res.status(200).send({ persona: datos });
    })

}

function getPersonas (req,res){
    Persona.find({},(err, datos)=>{
        if(err) res.status(500).send({ message: `Error en la petición a la BD: ${err} `})
        if(!datos) return res.status(404).send({ message: `No hay registros`})
        
        res.status(200).send({ persona: datos });
    })
}

function updatePersona (req,res) {
    let personaId=req.params.personaId;
    let personaUpdate=req.body;
    Persona.findByIdAndUpdate(personaId, personaUpdate, {new: true}, (err, datos)=>{
        if(err) res.status(500).send({ message: `Error al actualizar el registro en la BD: ${err} `})
        res.status(200).send({ persona: datos });
    });
}

function savePersona (req,res){
    console.log('POST /persona');
    console.log(req.body);
    
    let persona = new Persona()
    persona.tipoDoc= req.body.tipoDoc
    persona.docIdent= req.body.docIdent
    persona.nombres= req.body.nombres
    persona.apellidos= req.body.apellidos
    persona.direccion= req.body.direccion
    persona.telFijo= req.body.telefono
    persona.celular= req.body.celular
    persona.sitioWeb= req.body.url
    persona.perfil= req.body.perfil

    persona.save((err, datos)=>{
        if(err) res.status(500).send({ message: `Error al guardar en BD: ${err} `})
        res.status(200).send({ persona: datos });
    })
}

function deletePersona (req,res){
    let personaId=req.params.personaId

    Persona.findById(personaId, (err, persona)=> {
        if(err) res.status(500).send({ message: `Error al eliminar registro en la BD: ${err} `})
        if(!persona) return res.status(404).send({ message: `La persona no existe`})
        
        persona.remove(err=>{
            if(err) res.status(500).send({ message: `Error al eliminar registro en la BD: ${err} `})
            res.status(200).send({ message: `E registro ha sido eliminado ` });
        })
    })
}

module.exports = {
    getPersona,
    getPersonas,
    updatePersona,
    savePersona,
    deletePersona
}