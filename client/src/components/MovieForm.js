import React from 'react';
import { Form, Button, TextArea, Grid } from 'semantic-ui-react';


  class MovieForm extends React.Component {
    state = { name: '', description: '', rating: '' }

    handleSubmit = (e) => {
      this.props.addMovie({...this.state})
      this.setState({ name: '', description: '', rating: '' })
    }

    handleChange = (e) => {

      e.preventDefault()
      let { target: { name, value }} = e;
      this.setState({ [name]: value })
    }

    render() {
      let { name, description, rating } = this.state;
      return(
        <Grid centered columns={2}>
          <Grid.Column>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input
              name='name'
              value={name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
             <input
               name='description'
               value={description}
               onChange={this.handleChange}
              />
        </Form.Field>
          <Form.Field>
            <label>Rating</label>
            <input
              name='rating'
              value={rating}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
        </Grid.Column>
      </Grid>
      )
    }
  }


export default MovieForm;
