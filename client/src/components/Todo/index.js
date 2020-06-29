import React from 'react';
import { Segment, Icon, Form as UIForm, Button } from 'semantic-ui-react';
import { Form, Field } from 'react-final-form';


export default class Todo extends React.Component {
  state = {
    showEditTask: false,
  }

  toggleShowEditTask = () => this.setState({ showEditTask: !this.state.showEditTask });

  handleSubmit = (data) => {
    this.props.handleEditNewTask(data);
    this.setState({showEditTask: false});
  }

  render () {
    const {
      description,
      complete,
      id,
    } = this.props;
    const { showEditTask } = this.state;
    return (
      showEditTask
        ? (
          <Segment>
            <Form
              onSubmit={this.handleSubmit}
              initialValues={{ id, complete, description }}
              render={({ handleSubmit }) => (
              <UIForm onSubmit={handleSubmit}>
                <UIForm.Field>
                  <Field name="description" component="input" placeholder="Type Something Here..." />
                  <div style={{ marginTop: '10px', lineHeight: '30px' }}><Field name="complete" component="input" type="checkbox" style={{ verticalAlign: 'initial', marginRight: '5px' }}/> Complete</div>
                  <Field name="id" component="input" type="hidden" />
                </UIForm.Field>
                <Button color="red" onClick={this.toggleShowEditTask}><Icon name="cancel" />Cancel</Button>
                <Button color="blue" type="submit"><Icon name="add" />Save</Button>
              </UIForm>
            )} />
          </Segment>
        )
        : <Segment onClick={this.toggleShowEditTask} style={{ textDecoration: complete ? 'line-through' : 'initial'}}>{description}</Segment>
    );
  }
}