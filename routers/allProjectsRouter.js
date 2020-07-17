const express = require('express');

const api = require('../data/allProjects-model.js');

const router = express.Router();

//Path starts at /api/

//Project crud

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

router.get('/project', (req, res) => {
	api
		.getAllProjects()
		.then((returned) => {
			res.json(returned);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

//Resource crud

//Task crud

//References Crud??

module.exports = router;
