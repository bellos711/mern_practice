const PetShelterController = require('../controllers/petshelter.controller');
module.exports = app => {
    app.post('/api/pet/add', PetShelterController.addNewPet);
    app.get('/api/pets/', PetShelterController.getAllPets);
    app.get('/api/pets/:id', PetShelterController.findOnePet);
    app.put('/api/pets/update/:id', PetShelterController.updatePet);
    app.delete('/api/pets/delete/:id', PetShelterController.deletePet);
};