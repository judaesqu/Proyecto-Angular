const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'db_basico',
})

conexion.connect((err)=>{
    if(err){
        console.log('Error al conectar con la base de datos. Intenta nuevamente' + err)
    }else{
        console.log('Estas conectado')
    }
});

module.exports = conexion;