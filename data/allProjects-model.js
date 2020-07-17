const db = require('./allProjectsConfig');

//Adding projects

const addProject = (obj) => {
	return db('project').insert(obj);
};

//Reading projects

const getAllProjects = () => {
	return db('project');
};

//Adding resources

const addResource = (obj) => {
	return db('resource').insert(obj);
};

//Reading resources

const getAllResources = () => {
	return db('resource');
};

//Adding tasks

const addTask = (obj) => {
	return db('task').insert(obj);
};

//Reading tasks

const getAllTasks = () => {
	return db('task');
};

//Assigning Resource to a Project

module.exports = {
	addProject,
    getAllProjects,
    addResource,
    getAllResources,
    addTask,
    getAllTasks
};
