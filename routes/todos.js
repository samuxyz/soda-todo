const express = require('express');
const router = express.Router();
const {getTodos, writeTodos} = require('../db/helpers');

router.get('/todos', (req, res, next) => {
  return res.status(200).json({statusCode: 200, message: 'Todos list', data: getTodos()});
});

router.post('/todos', (req, res, next) => {
  const {item} = req.body;
  const todosList = getTodos();
  
  const newTodo = {id: todosList.length + 1, description: item.description, complete: item.complete};
  todosList.push(newTodo);

  writeTodos(todosList);

  return res.status(201).json({stasusCode: 200, message: 'Todo correctly created', data: newTodo});
});


router.put('/todos/:todoId', (req, res, next) => {
  const {item} = req.body;
  const {todoId} = req.params;
  const todosList = getTodos();

  // this step is not necessary for the update but it's handy to check whether the todo exists first or not.
  const elem = todosList.find((todo) => todo.id === parseInt(todoId));

  if (!elem) {
    return res.status(404).json({statusCode: 404, message: 'Todo not found', data: {}});
  }

  const updatedTodo = {...elem, ...item};

  writeTodos(todosList.map((todo) => todo.id === updatedTodo.id ? updatedTodo : todo))

  return res.status(201).json({stasusCode: 200, message: 'Todo correctly updated', data: updatedTodo});
});

module.exports = router;