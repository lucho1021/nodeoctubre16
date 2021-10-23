const {request, response} = require('express');
const {insertarJugador} = require('../services/servicios.js');
const {leerJugador} = require('../services/servicios.js')
const {leerJugadores} = require('../services/servicios.js')
const {modificarJugador} = require('../services/servicios.js')
const {borrarJugador} = require('../services/servicios.js')

async function registrarJugador(peticion = request, respuesta = response){

    //capturo los datos que llegan del cuerpo de la peticion
    let datosCliente = peticion.body;

    //Intentar grabar los datos en bd usando el servicio
    try{

        await insertarJugador(datosCliente)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito, registrando jugador.."
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upss...."+error
    })
}
    
}

async function buscarJugadores(peticion = request, respuesta = response){

    try{

        let jugadores = await leerJugadores()
        respuesta.status(200).json({
            estado:true,
            datos:jugadores
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upss...."+error
    })
}
    
}

async function buscarJugador(peticion = request, respuesta = response){

    //capturar jugador a buscar

    let id = peticion.params.id

    try{

        let jugador = await leerJugador(id)
        respuesta.status(200).json({
            estado:true,
            datos:jugador 
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upss...."+error
    })
}
    


}

async function editarJugadores(peticion = request, respuesta = response){

    let datos = peticion.body
    let id = peticion.params.id

    try{

        await modificarJugador(id, datos)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito, editando jugador"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upss...."+error
    })
}

}

async function eliminarJugadores(peticion = request, respuesta = response){

    let id = peticion.params.id

    try{

        await borrarJugador(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Jugador eliminado"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upss...."+error
    })
} 

}



module.exports={registrarJugador, buscarJugadores, buscarJugador, editarJugadores, eliminarJugadores}