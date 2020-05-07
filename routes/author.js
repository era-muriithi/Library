const express = require('express')
const router = express.Router()

//All Authors
router.get('/', (req, res) =>{
    res.render('authors/index')
})

//new Author route

router.get('/new', (req, res) => {
    res.render('authors/new')
})

//create author

router.post('/', (req, res) => {
    res.send('Create')
})
module.exports = router