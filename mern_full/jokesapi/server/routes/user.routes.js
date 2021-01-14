const userController = require("../controllers/user.controller");

module.exports = (app) => {
  app.post("/api/users", userController.create);
  app.delete("/api/users/delete/:id", userController.delete);
  app.get("/api/users/", userController.getAll);

  app.get("/api/users/:id", userController.findOneSingleUser);
  app.put("/api/users/update/:id", userController.update);
};