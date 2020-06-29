const fs = require('fs');

const rawdata = fs.readFileSync(__dirname + '/todos.json');
// const todos = JSON.parse(rawdata);

const getTodos = () => {
  try {
    return JSON.parse(rawdata);
  } catch (e) {
    return [];
  }
};

const writeTodos = (todos) => fs.writeFileSync(__dirname + '/todos.json', JSON.stringify(todos));

module.exports = {
  getTodos,
  writeTodos,
};