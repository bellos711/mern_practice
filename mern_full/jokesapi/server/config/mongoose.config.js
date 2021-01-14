const mongoose = require("mongoose");

module.exports= (dbName) => {
	mongoose
	.connect(`mongodb://localhost/${dbName}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})

	.then(() => 
	console.log(`!!YOU ARE NOW CONNECTED TO THIS DATABASE: ${dbName}!!`))
	.catch((error) => {
	console.log("There is an error on the database side with this error: ", error);
	});
}







