const express = require('express');
const Book  = require('../models/Book');
const bookRoute = express.Router();


//            <------------Routes---------------->
//------Books Routes-------


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


//find books
bookRoute.get('/', async function(req,res){
    const book =  await Book.find().populate('createdBy').sort('createdAt');

    if(book){
        res.status(200);
        res.json(book);
    }else{
        res.status(500);
        res.send("Creating fail");
    }
});


//Delete books by id 
bookRoute.delete('/:id', async function(req,res){
    const book = await Book.findByIdAndDelete(req.params.id);
        res.status(200);
        res.json(book);
  
        res.status(500);
        res.send("Creating fail");
    
});

//Update books by id 
bookRoute.put(
    '/:id',
  async function (req, res) {
      const book = await Book.findById(req.params.id);

      if(book){
       const updatedBook = await Book.findByIdAndUpdate(
           req.params.id,
           req.body,{
               new :true,
               runValidators : true
           }
       )
      }else{
          throw new error("Not working"); 
      }
    });

//find a book by Id 
bookRoute.get(
    '/:id',
     (async (req, res) => {
      try {
        const book = await Book.findById(req.params.id);
        res.status(200);
        res.send(book);
      } catch (error) {
        res.status(500);
        throw new Error('No book found');
      }
    })
  );


module.exports = bookRoute;
