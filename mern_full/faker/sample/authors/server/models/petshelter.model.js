const mongoose = require('mongoose');

const PetShelterSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, 'Add the name of the pet'],
        minlength: [3, 'The name of the pet needs to be longer than 1 character'],
        maxlength: [20, 'Have you lost your damn mind?']
    },
    petType: {
        type: String,
        required: [true, 'Please add the type of pet'],
        minlength: [3, 'Please write out the full type of pet'],
        maxlength: [20, 'Is it really that long?']
    },
    
    petDescription: {
        type: String,
        required: [true, 'Please provide a description of the pet'],
        minlength: [3, 'Please include a detailed description of our companion'],
        maxlength: [500, 'Is it that long?']
    },

    skillOne: {
        type: String
    },

    skillTwo: {
        type: String
    },

    skillThree: {
        type: String
    },

    likes: {
        type: Number
    }
},

    { timestamp: true }
);

const petShelters = mongoose.model('petShelters', PetShelterSchema);

module.exports = petShelters;