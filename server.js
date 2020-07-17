const express = require('express');

const allProjectsRouter = require('./routers/allProjectsRouter.js');

const server = express();

const PORT = 8000;

server.use(express.json());

server.use('/api/', allProjectsRouter);

server.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
