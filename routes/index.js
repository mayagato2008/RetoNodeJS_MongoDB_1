'use strict'
const express = require('express')
const PersonaCtrl = require('../controladores/Persona')
const router=express.Router()


router.get('/persona', PersonaCtrl.getPersonas )
router.get('/persona/:personaId', PersonaCtrl.getPersona)
router.post('/persona', PersonaCtrl.savePersona)
router.put("/persona/:personaId", PersonaCtrl.updatePersona)
router.delete('/persona/:personaId', PersonaCtrl.deletePersona)

module.exports = router