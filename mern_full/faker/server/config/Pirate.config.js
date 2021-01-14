const mongoose = require("mongoose");

module.exports = (dbName)=>{
    mongoose.connect(`mongodb://localhost/${dbName}`,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useFindAndModify: false
    })

    .then(()=> console.log(`Connected to ${dbName}!!! TADAAA!`))
    .catch((err)=> {
        console.log("Something dun goof'd in the db side", err);
    })


}