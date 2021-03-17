const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
//Creating a Schema for the models
//--User
const userSchema = new mongoose.Schema({           //Schema is the representation of the Model how we want the data and we can set different constraints through the same
name :{
   type : String,
   required: true
},
email :{
    type :String,
    required: true,
    unique: true
},
password :{
    type : String,
    required: true
}
});
userSchema.pre('save' , async function(next){           //.pre Function is used to  modify the value before the schema is implemented 
const salt = await bcrypt.genSalt(10);                    //Used bcrpytJS docs for this
this.password = await bcrypt.hash(this.password,salt);     //This.password is hashed using cryptography and the database is storing a new changed password for the same 
next();
});                                                       // next() is just used to change it the next User registeration 


const User = mongoose.model('User', userSchema);  //Now anytime we have to create a user we will use this model to create the instance for the same 
module.exports = User; //Exports the model so that user can be created 
