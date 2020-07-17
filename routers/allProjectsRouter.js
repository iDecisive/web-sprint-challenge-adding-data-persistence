const express = require('express');

const api = require('../data/allProjects-model.js');

const router = express.Router();

//Path starts at /api/

router.post('/project', (req, res) => {
	api
		.addProject(req.body)
		.then((returned) => {
			res.status(201).json(returned);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = router;
