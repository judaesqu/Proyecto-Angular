const router = require ('express').Router()
const conexion = require ('./config/conexion')

//Listado de equipos

router.get('/', (req, res)=>{
    let sql = 'SELECT * FROM tb_equipo'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//Un equipo

router.get('/:id',(req, res)=>{
    const {id} = req.params
    let sql = 'SELECT * FROM tb_equipo WHERE id_equipo = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//Insert de un equipo

router.post('/', (req, res)=>{
    const{nombre, logo} = req.body

    let sql = `INSERT INTO tb_equipo(nombre, logo) VALUES ('${nombre}', '${logo}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Equipo Agregado: '})
        }
    })
})

// Delete de un equipo

router.delete('/:id', (req, res)=>{
    const {id} = req.params
    let sql = `DELETE FROM tb_equipo WHERE id_equipo = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Equipo Eliminado'})
        }
    })
})

//Update de un equipo

router.put('/:id', (req, res)=>{
    const{id}=req.params
    const{nombre, logo}=req.body

    let sql = `UPDATE tb_equipo SET nombre = '${nombre}', logo = '${logo}' WHERE id_equipo = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if (err) throw err
        else{
            res.json({status: 'Equipo Modificado'})
        }
    })
})

module.exports = router;