const port = 8000;
// const cors = require("cors");

const express = require("express");
const dbName = "sample-mongoose-db"

require("./config/mongoose.config")(dbName);

const app = express();
app.use(express.json());

require("./routes/user.routes")(app);


app.listen(port, () => 
console.log(`Listening on port ${port} 
    for REQuests to RESpond to.`)
);


