const express = require('express')
const router = express.Router()
const Author = require('../modules/author')

//All Authors
router.get('/', (req, res) =>{
    res.render('authors/index')
})

//new Author route

router.get('/new', (req, res) => {
    res.render('authors/new', {author: new Author() })
})

//create author

router.post('/', (req, res) => {
    res.send('Create')
})
module.exports = router