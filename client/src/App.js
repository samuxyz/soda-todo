import React from 'react';
import './App.css';
import Todo from './components/Todo';
import AddTask from './components/AddTask';
import { Container, Segment, Icon, Form, Button } from 'semantic-ui-react';

class App extends React.Component {
  state = {
    todosList: [],
  }

  async componentDidMount() {
    try {
      const response = await fetch('/api/v1/todos');
      const jsonResponse = await response.json();
      const todosList = jsonResponse.data;
      this.setState({todosList});
    } catch (e) {
      console.log(e);
      this.setState({todosList: []});
    }
  }

  handleAddNewTask = async (data) => {
    try {
      const response = await fetch('/api/v1/todos', {
        headers: {
          'Content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ item: { ...data } }),
      });
      const jsonResponse = await response.json();
      const newTodo = jsonResponse.data;
      this.setState({ todosList: [ ...this.state.todosList, newTodo ]});
    } catch (e) {
      console.log(e);
      this.setState({ todosList: [] });
    }
  }

  handleEditNewTask = async (data) => {
    try {
      const response = await fetch(`/api/v1/todos/${data.id}`, {
        headers: {
          'Content-type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify({ item: { ...data } }),
      });
      const jsonResponse = await response.json();
      const newTodo = jsonResponse.data;
      this.setState({ todosList: this.state.todosList.map((todo) => todo.id === newTodo.id ? newTodo : todo)});
    } catch (e) {
      console.log(e);
      this.setState({ todosList: [] });
    }
  }

  render() {
    const { todosList } = this.state;
    return (
      <Container style={{ paddingTop: '5em' }}>
        <h2>Todo List</h2>
        <AddTask handleAddNewTask={this.handleAddNewTask} />
        {todosList.map((todo) => <Todo handleEditNewTask={this.handleEditNewTask} {...todo} />)}
      </Container>
    );
  }
}

export default App;
