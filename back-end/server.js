/** @format */

const express = require('express');       //Imports the express package from node modules
const app = express();                    //functions are first class citizens hence assigning it to a constant for ease

const PORT = process.env.PORT || 5000      //This is the constant url used for heroku i.e  if there is no port declared then it should run locally on the the port 5000

app.listen(PORT, function() {
console.log(`the server is up and running on port: ${PORT}`);
});