const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
const IncidentMiddleware = require("./middlewares/IncidentMiddleware");
const ProfileMiddleware = require("./middlewares/ProfileMiddleware");
const SessionsMiddleware = require("./middlewares/SessionsMiddleware");
const OngMiddleware = require("./middlewares/OngMiddleware");

const routes = express.Router();

routes.post("/sessions", SessionsMiddleware.index, SessionController.create);

routes.get("/profile", ProfileMiddleware.index, ProfileController.index);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngMiddleware.create, OngController.create);

routes.get("/incidents", IncidentMiddleware.index, IncidentController.index);
routes.post("/incidents", IncidentMiddleware.create, IncidentController.create);
routes.delete(
  "/incidents/:id",
  IncidentMiddleware.delete,
  IncidentController.delete
);

module.exports = routes;
