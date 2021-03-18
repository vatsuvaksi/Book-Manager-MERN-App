const mongoose  = require('mongoose');


//Creating a Schema for the models
//--Books
const bookSchema = new mongoose.schema({
    category : {
        type : String,
        required : [true,'Book Category is required']
    },
    author :{
        type : String,
        required : true
    },
    title :{
        type : String ,
        required : true
    },
    createdBy :{                                             //This is a relationship with user as it refers to the user docs and holds a true value that means the user should be present for this book to be generated in the library
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
}, {
    timestamps : true
});

const Book =mongoose.model("Book",bookSchema);

module.exports = Book;