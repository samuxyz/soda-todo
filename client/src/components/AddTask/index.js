import React from 'react';
import { Segment, Icon, Form as UIForm, Button } from 'semantic-ui-react';
import { Form, Field } from 'react-final-form';


export default class AddTask extends React.PureComponent {
  state = {
    showAddTask: false,
  }

  toggleShowAddTask = () => this.setState({ showAddTask: !this.state.showAddTask });

  handleSubmit = (data) => {
    this.props.handleAddNewTask(data);
    this.setState({showAddTask: false});
  }

  render () {
    const { showAddTask } = this.state;
    return (
      <>
        {
          showAddTask
            ? (
              <Segment>
                <Form onSubmit={this.handleSubmit} render={({ handleSubmit, reset }) => (
                  <UIForm onSubmit={handleSubmit}>
                    <UIForm.Field>
                      <Field name="description" component="input" placeholder="Type Something Here..."></Field>
                      <div style={{ marginTop: '10px', lineHeight: '30px' }}><Field name="complete" component="input" type="checkbox" style={{ verticalAlign: 'initial', marginRight: '5px' }}/> Complete</div>
                    </UIForm.Field>
                    <Button color="red" onClick={this.toggleShowAddTask}><Icon name="cancel" />Cancel</Button>
                    <Button color="blue" type="submit"><Icon name="add" />Add Task</Button>
                  </UIForm>
                )} />
              </Segment>
            )
            : <Segment onClick={this.toggleShowAddTask}><Icon name="add" />Add Task</Segment>
          }
      </>
    );
  }
}