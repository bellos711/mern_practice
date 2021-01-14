const mongoose = require('mongoose');

const PetShelterSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, '{PATH} is required'],
        minlength: [3, '{PATH} must be more than {MINLENGTH} characters'],
        maxlength: [20, '{PATH} cannot exceed {MAXLENGTH} characters...']
    },
    petType: {
        type: String,
        required: [true, '{PATH} is required'],
        minlength: [3, '{PATH} must be more than {MINLENGTH} characters'],
        maxlength: [20, '{PATH} cannot exceed {MAXLENGTH} characters...']
    },
    
    petDescription: {
        type: String,
        required: [true, '{PATH} is required'],
        minlength: [3, '{PATH} must be more than {MINLENGTH} characters'],
        maxlength: [500, '{PATH} cannot exceed {MAXLENGTH} characters...']
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
        type: Number,
        default: 0
    }
},

    { timestamp: true }
);

const petShelters = mongoose.model('petShelters', PetShelterSchema);

module.exports = petShelters;