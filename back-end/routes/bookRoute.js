const express = require('express');
const Book  = require('../models/Book');
const bookRoute = express.Router();

//Create Books
bookRoute.post('/', async function(req,res){
    const book = await Book.create(req.body);

    if(book){
        res.status(200);
        res.json(book);
    }else{
        res.status(500);
        res.send("Creating fail");
    }
});

module.exports = bookRoute;
