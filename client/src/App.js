import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieForm from './components/MovieForm';
import Movies from './components/Movies';
import Movie from './components/Movie';
import { Button } from 'semantic-ui-react';

class App extends Component {
  state = { movies: [], id: 1, formShowing: false }

  addMovie = (movie) => {
    let { movies, id } = this.state;
    this.setState({ movies: [{...movie, id}, ...movies], id: id+1 })
  }

  toggleForm = () => {
    this.setState({formShowing: !this.state.formShowing})
  }

  handleDelete = (id) => {
    this.setState({movies: this.state.movies.filter( m => m.id != id)})
  }

  render() {
    const { formShowing } = this.state;
    return (
      <div>
        <h1 className='home'>Movies</h1>
        { formShowing && <MovieForm addMovie={this.addMovie} /> }
        <Button onClick={this.toggleForm}>Add Movie</Button>
        <Movies films={this.state.movies} handleDelete={this.handleDelete.bind(this)}/>
      </div>
    );
  }
}

export default App;
