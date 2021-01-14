const Author = require("../models/author.model");

module.exports ={
    create (req, res) {
        Author.create(req.body)
        .then(newCreatedAuthor => res.json({ author: newCreatedAuthor }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    },
    
    delete (req, res) {
        Author.deleteOne({_id: req.params.id })
        .then(result => res.json({ author: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    },

    getAll (req, res) {
        Author.find()
        .then((authors) => res.json({author: authors}))
        // .then((authors) => res.json(authors))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    },

    findOneSingleAuthor (req, res) {
        Author.findOne({_id: req.params.id})
        .then(oneSingleAuthor => res.json({ author: oneSingleAuthor }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    },

    update (req, res) {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updateAuthor => res.json({ author: updateAuthor }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    },


}
