const PetShelter = require('../models/petshelter.model');

module.exports = {
    
    addNewPet(req, res) {
        PetShelter.create(req.body)
        .then(newlyAddedPet => res.json({ pet: newlyAddedPet }))
        .catch(err => res.json({ message: 'There is an error in adding a new pet', error: err }))
    },

    
    getAllPets(req, res) {
        PetShelter.find()
        .then(allPets => res.json({ pets: allPets }))
        .catch(err => res.json({ message: 'There is an error in getting ALL pets', error: err }))
    },
    
    

    findOnePet(req, res) {
        PetShelter.findOne({ _id: req.params.id })
        .then(oneSinglePet => res.json({ pet: oneSinglePet}))
        .catch (err => res.json({ message: 'There is an error in getting a single pet', error: err }))
    },

    
    updatePet(req, res) {
        PetShelter.update({ _id: req.params.id }, req.body, { new: true })
        .then(updatedPet => res.json({ pet: updatedPet }))
        .catch(err => res.json({ message: 'There is an error in update pet', error: err }))
    },

    
    deletePet(req, res) {
        PetShelter.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'There is an error in deleting a pet', error: err }))
    },

    likePet(req, res) {
        PetShelter.findOneAndUpdate({_id: req.params._id},  {likes: 1})
        .then(() => res.json({likes: 'test likes'}))
        .catch(err => res.json(err));
    },

}