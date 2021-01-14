const express = require('express');
const cors = require('cors');
const dbName = 'PetShelterdb';
const port = 8000;

//=========================================
//If you do not put these in order, you will grow an extra limb
require('./server/configs/mongoose.config')(dbName);
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/petshelter.routes')(app);


app.listen(port, () => `Server running on port ${port} 🔥`);