const express = require('express');
const route = express.Router();

const operationsController = require('../controllers/operations.js');

route
	.route('/')

route
	.route("/challenge")
	.post(operations.createTask);

module.exports = route;