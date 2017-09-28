import React from 'react';
import Movies from './Movies';
import { Card, Button } from 'semantic-ui-react';

class Movie extends React.Component {

  render() {
    const { film } = this.props;
    return(
      <div>
        <Card>
          <Card.Content>
            //add image tag here when i learn how
            <br />
            <Card.Header>{film.name}</Card.Header>
            <Card.Meta>{film.rating}</Card.Meta>
            <br />
            <Card.Description>{film.description}</Card.Description>
            <br />
            <Button compact size='mini'>Edit</Button>
            <Button compact size='mini' onClick={() => this.props.handleDelete(film.id)}>Delete</Button>
          </Card.Content>
        </Card>
      </div>
    )
  }
}


export default Movie;
