'use strict'

const express = require('express'),
    router = express.Router()

function jade(req, res, next){
    let locals = {
        title: 'jade'
    }
    res.render('index', locals)
}

router.get('/', (req,res) => {
        res.end(`<h1>Listo </h1>`)
    })
    .get('/jade', jade)

module.exports = router;