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

//Reading tasks

//Assigning Resource to a Project

module.exports = {
	addProject,
    getAllProjects,
    addResource,
    getAllResources
};
