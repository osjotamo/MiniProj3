const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const especialistaSchema = new Schema({
    name: String
});

module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.especialista, especialistaSchema);