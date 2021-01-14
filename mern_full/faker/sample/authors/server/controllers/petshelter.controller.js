const PetShelter = require('../models/petshelter.model');

module.exports = {
    //Adding a Pet!
    addNewPet(req, res) {
        PetShelter.create(req.body)
        .then(newlyAddedPet => res.json({ pet: newlyAddedPet }))
        .catch(err => res.json({ message: 'Something\'s wrong, with adding a pet', error: err }))
    },

    //Getting all the pets!
    getAllPets(req, res) {
        PetShelter.find()
        .then(allDaPets => res.json({ pets: allDaPets }))
        .catch(err => res.json({ message: 'Something\'s wrong, with getting all the pets', error: err }))
    },
    
    //Liking a pet
    likingAPet(req, res) {
        PetShelter.findOneAndUpdate({_id: req.params._id}, {$inc: {likes: 1}})
        .then(() => res.json({likes: 'All the likes'}))
        .catch(err => res.json(err));
    },
    //Finding one Pet
    findOnePet(req, res) {
        PetShelter.findOne({ _id: req.params.id })
        .then(oneSinglePet => res.json({ pet: oneSinglePet}))
        .catch (err => res.json({ message: 'Something\'s wrong, with getting one single pet', error: err }))
    },

    //Updating a pet!
    updatePet(req, res) {
        PetShelter.update({ _id: req.params.id }, req.body, { new: true })
        .then(updatedPet => res.json({ pet: updatedPet }))
        .catch(err => res.json({ message: 'Something\'s wrong, with updating the pet', error: err }))
    },

    //Deleting a pet
    deletePet(req, res) {
        PetShelter.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something\'s wrong, with deleting the pet', error: err }))
    },

}