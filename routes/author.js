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

router.post('/', async (req, res) => {
    const author = new Author({
        name:req.body.name
    })
    try {
        const newAuthor = await author.save()
        res.redirect(`author`)

    } catch{
        res.render('authors/new', {
            author: author,
            errorMessage: 'Error creating Author'

    })
}
})
    
module.exports = router