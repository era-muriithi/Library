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
    const author = new Author({
        name:req.body.name
    })
    author.save((err, newAuthor) => {
        if  (err) {
            res.render('author/new', {
                author: author,
                errorMessage: 'Error creating Author'
            })

        } else {
            res.redirect(`author`)

        }
    })
})
module.exports = router