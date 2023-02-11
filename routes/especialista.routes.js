const express = require('express');
let router = express.Router();
const EspecialistaController = require('../controllers/especialista.controller');
const {
    body,
    param,
    sanitizeBody
} = require('express-validator');
const CONFIG = require("../config/config");
const AuthController = require("../controllers/auth.controller");

router.route('/')
    .get(AuthController.checkAuth, EspecialistaController.get)
    .post(AuthController.checkAuth, [body('nome').isString()], EspecialistaController.create);


router.route('/:id')
    .get(AuthController.checkAuth, [param("id").isMongoId()], EspecialistaController.getOne)
    .put(AuthController.checkAuth, [param("id").isMongoId()], EspecialistaController.update)
    .delete(AuthController.checkAuth, [param("id").isMongoId()], EspecialistaController.delete);

module.exports = router;