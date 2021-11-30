const express = require('express')
const router = express.Router()
const pool = require('../database')
const path = require('path')
const route = require('color-convert/route')

//-------------ROUTES-------------------
// GET ALL THE PERSONS
router.get('/api/getPersonas', async (req, res, next) => {
    await pool.query('Select * from Personas')
        .then(function (data) {
            res.status(200).json(
                data.rows,
            );
        })
        .catch(function (err) {
            next(err);
        });
})

// GET A PERSON WITH ID
router.get('/api/getPersonas/:id', async (req, res, next) => {
    var id = req.params.id
    await pool.query(`select * from Personas where idPersona = '${id}'`)
        .then(function (data) {
            res.status(200).json(
                data.rows[0]
              );
        })
        .catch(function (err) {
            next(err);
        });
})


//DELETE WITH ID
router.delete('/api/deletePersona/:id', async (req, res, next) => {
    var id = req.params.id
    await pool.query(`delete from Personas where idPersona = '${id}'`)
        .then(function (data) {
            res.status(200).json(
                data.rows[0]
              );
        })
        .catch(function (err) {
            next(err);
        });
})

//POST PERSONA
router.post('/api/postPersona/',async (req, res, next) =>{
    var body = req.body
    await pool.query(`insert into Personas(Nombre,aPaterno,aMaterno,Usuario,fechaN) values( '${body.nombre}','${body.apaterno}','${body.amaterno}','${body.usuario}','${body.fechan}')`)
    .then(function (data) {
        res.status(200).json(
            data.rows[0]
          );
    })
    .catch(function (err) {
        next(err);
    });
})

//UPDATE PERSONA
router.put('/api/putPersona/:id',async (req, res, next) =>{
    var body = req.body
    var id = req.params.id
    await pool.query(`update Personas set Nombre = '${body.nombre}', aPaterno = '${body.apaterno}' , aMaterno = '${body.amaterno}' , Usuario = '${body.usuario}', fechaN = '${body.fechan}' where idPersona = ${id}`)
    .then(function (data) {
        res.status(200).json(
            data.rows[0]
          );
    })
    .catch(function (err) {
        next(err);
    });
})

module.exports = router