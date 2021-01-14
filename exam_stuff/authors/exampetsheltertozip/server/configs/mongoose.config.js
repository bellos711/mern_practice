const mongoose = require('mongoose');

module.exports = dbName => {
    mongoose.connect(`mongodb://localhost:${dbName}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }).then(() => console.log('!!!! YOU ARE NOW CONNECTED TO THE DATABASE: ' + dbName))
    .catch(err => console.log('X There was an error connecting to the database: ', err))
}