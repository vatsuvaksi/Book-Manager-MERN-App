const mongoose = require('mongoose');
//         <------------Connecting to Mongoose---------------->
const dbConnect = function() {

//ID and Password for authentication
// Id vatsuvaksi
//password-----pgkgYGHHNXEVWC6O
const dbUrl ='somedb url';
mongoose.connect(dbUrl,{             //Mongoose configuration
    useFindAndModify:true,
    useUnifiedTopology : true,
    useCreateIndex: true,
    useNewUrlParser : true
}).then(function(){                  //  if the above holds true then this will show this message
    console.log("DB Connected");
});
};

module.exports = dbConnect;
