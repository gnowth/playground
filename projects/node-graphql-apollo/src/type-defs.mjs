export default `
  type Task {
    description: String
  }

  type Query {
    taskList: [Task]
  }
`;
