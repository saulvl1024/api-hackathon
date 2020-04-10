const express = require('express')
const router = express.Router()
const pool = require('../database')
const path = require('path')

//-------------ROUTES-------------------
router.get('/', function (req, res, next) {
    res.send('hola')
});