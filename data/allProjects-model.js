const db = require('./allProjectsConfig');

//Adding projects

const addProject = (obj) => {
	return db('project').insert(obj);
};

//Reading projects

//Adding resources

//Reading resources

//Adding tasks

//Reading tasks

//Assigning Resource to a Project

module.exports = {
    addProject
}