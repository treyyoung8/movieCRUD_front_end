import React, { Component } from 'react'
import './App.css'
import Header from './Components/header'
import Footer from './Components/footer'
import IndexPage from './Components/indexPage'

class App extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch('https://treymoviecrudbackend.herokuapp.com/movies' || 'http://localhost:3002/movies')
      .then(res => res.json())
      .then(movies => this.setState({ movies }));
  }

  deleteMovie = (id) => {
    fetch('https://treymoviecrudbackend.herokuapp.com/movies/' || 'http://localhost:3002/movies' + id, {method: "DELETE"})
  }


  render() {
    return (
      <>
        <Header />
        <IndexPage delete={this.deleteMovie} movies={this.state.movies} />
        <Footer />
      </>
    );
  }
}

export default App
