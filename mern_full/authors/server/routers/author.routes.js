const authorController = require("../controllers/author.controller");

module.exports = (app) => {
  app.post("/api/authors", authorController.create);
  app.delete("/api/authors/delete/:id", authorController.delete);
  app.get('/api/authors', authorController.getAll);
  app.get("/api/authors/:id", authorController.findOneSingleAuthor);
  app.put("/api/authors/update/:id", authorController.update);
};                      

