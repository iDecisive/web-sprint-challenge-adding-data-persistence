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

const assignResource = (obj) => {
	return db('projectResourceJunction').insert(obj);
};

//Reading Junction Table

const getAllRefs = () => {
	return db('projectResourceJunction');
};

const getProjectRefs = (projectID) => {
	return db('projectResourceJunction').where({ projectID: projectID });
};

module.exports = {
	addProject,
    getAllProjects,
    addResource,
    getAllResources,
    addTask,
    getAllTasks,
    assignResource,
    getAllRefs,
    getProjectRefs
};
