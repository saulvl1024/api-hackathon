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


module.exports = router