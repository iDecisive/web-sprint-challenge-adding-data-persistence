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

router.post('/resource', (req, res) => {
	api
		.addResource(req.body)
		.then((returned) => {
			res.status(201).json(returned);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get('/resource', (req, res) => {
	api
		.getAllResources()
		.then((returned) => {
			res.json(returned);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

//Task crud

router.post('/task', (req, res) => {
	api
		.addTask(req.body)
		.then((returned) => {
			res.status(201).json(returned);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get('/task', (req, res) => {
	let newArr = [];
	api
		.getAllTasks()
		.then((returned) => {
			newArr = [...returned];
			api.getAllProjects().then((projects) => {
				newArr.forEach((task) => {
					let foundProject = projects.filter(
						(item) => item.id === task.projectID
					);
					task.projectName = foundProject[0].name;
					task.projectDescription = foundProject[0].description;
				});
				res.json(newArr);
			});
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

//References Crud

router.post('/refs', (req, res) => {
	api
		.assignResource(req.body)
		.then((returned) => {
			res.status(201).json(returned);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get('/refs', (req, res) => {
	api
		.getAllRefs()
		.then((returned) => {
			res.json(returned);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

// STRETCH - get a project's resources

module.exports = router;
