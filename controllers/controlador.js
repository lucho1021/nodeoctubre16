const {request, response} = require('express');
const {insertarJugador} = require('../services/servicios.js');

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

function buscarJugadores(peticion = request, respuesta = response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando los jugador.."
        }
    )
}

function buscarJugador(peticion = request, respuesta = response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando un jugador.."
        }
    )
}

function editarJugadores(peticion = request, respuesta = response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy editando un jugador.."
        }
    )
}

function eliminarJugadores(peticion = request, respuesta = response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy eliminando un jugador.."
        }
    )
}



module.exports={registrarJugador, buscarJugadores, buscarJugador, editarJugadores, eliminarJugadores}