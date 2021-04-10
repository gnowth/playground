import database from './models/index.js';

const resolvers = {
  Query: {
    taskList: () => database.Task.findAll({ attributes: ['title', 'description'] }),
  },
};

export default resolvers;
