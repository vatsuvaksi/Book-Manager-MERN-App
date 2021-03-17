const mongoose = require('mongoose');

//Creating a Schema for the models 
//--User
const userSchema = new mongoose.Schema({           //Schema is the representation of the Model how we want the data and we can set different constraints through the same
name :{
   type : String,
   required: true
},
email :{
    type :String,
    required: true
},
password :{
    type : String,
    required: true
}
});

const User = mongoose.model('User', userSchema);  //Now anytime we have to create a user we will use this model to create the instance for the same 
module.exports = User; //Exports the model so that user can be created 
