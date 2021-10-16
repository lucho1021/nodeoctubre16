//IMPORTO TRAIGO EXPRESS PARA MI CODIGO (PARA PODERLO USAR)
const express = require('express') 

//Traer IMPORTAR la conexion
const {conectarBD}= require('../database/conexion.js')

//Traer las RUTAS
const rutas=require('../routes/rutas.js')

class ServidorModelo{

    constructor(){

        this.app = express()
        this.despertarBD()
        this.llamarAuxiliares()
        this.enrutarPeticiones()

    }

    despertarServidor(){

        this.app.listen(process.env.PUERTO,function(){
            console.log("Servidor encendido "+process.env.PUERTO);
        })

    }

    enrutarPeticiones(){
        
        this.app.use('/',rutas)
         
    }

    despertarBD(){

        conectarBD()

    }

    llamarAuxiliares(){
        this.app.use(express.json())
    }

}

module.exports=ServidorModelo