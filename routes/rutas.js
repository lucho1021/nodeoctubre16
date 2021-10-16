//Se trae la funcion Router para 
//separra las rutas de mi api
const { Router } =require('express')

//importo los controladores

const { registrarJugador } = require('../controllers/controlador.js')
const { buscarJugadores } = require('../controllers/controlador.js')
const { editarJugadores } = require('../controllers/controlador.js')
const { eliminarJugadores } = require('../controllers/controlador.js')
const { buscarJugador } = require('../controllers/controlador.js')

//una avribale que personaliza mis rutas
const rutas=Router()

//rutas del api
    rutas.get('/avanzada/v1/jugadores/:id', buscarJugador) 
  
    rutas.get('/avanzada/v1/jugadores', buscarJugadores) 

    rutas.post('/avanzada/v1/jugadores', registrarJugador) 
  
    rutas.put('/avanzada/v1/jugadores/:id', editarJugadores)
  
    rutas.delete('/avanzada/v1/jugadores/:id', eliminarJugadores) 

    module.exports=rutas