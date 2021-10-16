//importo el modelo de datos

const JugadorModelo = require ('../models/JugadorModelo.js')

//Servicio para agregar un documento a la bd

async function insertarJugador(datosJugador){

    let jugadorAInsertar = new JugadorModelo(datosJugador)

    return await jugadorAInsertar.save()

}

module.exports = {insertarJugador}