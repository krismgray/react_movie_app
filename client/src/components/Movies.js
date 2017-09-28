import React from 'react';
import Movie from './Movie';

class Movies extends React.Component {

  displayMovies = () => {
    const { films } = this.props;
    return films.map( movie => {
      return(
        <Movie key={movie.id} film={movie} handleDelete={this.props.handleDelete}/>
      );
    })
  }

  render() {
    return(
      <div>
        { this.displayMovies() }
      </div>

    )
  }
}

export default Movies;
