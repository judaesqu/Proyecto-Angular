require ('./config/conexion');

const express = require ('express');
const port = (process.env.port || 3000);

const app = express();

//datos json

app.use(express.json());

app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD,OPTIONS,POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type-Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    //datos de formulario
    res.header("Content-Type", "multipart/form-data");

    next();
});

//configuracion del puerto
app.set('port', port)

//rutas
app.use('/api', require('./rutas'))

//Iniciar express

app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('Error al iniciar el servidor: ' + error)
    }else{
        console.log('Servidor iniciado en el puerto: ' + port)
    }
})