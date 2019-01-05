import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/header'
import Footer from './Components/footer'
import HomePage from './Components/homePage'
import IndexPage from './Components/indexPage'
import EditPage from './Components/editPage'
import CreateMovie from './Components/createMovie'
import MoviePage from './Components/moviePage'

class App extends Component {
  state = {
    movies: [],
    oneMovie: []
  }
  
  componentDidMount() {
    this.fetchAllMovies()
  }

  fetchAllMovies() {
    fetch('http://localhost:3002/movies')
      .then(res => res.json())
      .then(movies => this.setState({ movies: movies }))
  }

  deleteMovie = (id) => {
    fetch('http://localhost:3002/movies/' + id, {method: "DELETE"})
      .then(res => {this.fetchAllMovies()})
  }

  getMovieById = (id) => {
    fetch('http://localhost:3002/movies/' + id)
      .then(res => res.json())
      .then(oneMovie => this.setState({ oneMovie: oneMovie }))
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
  }

  postMovieInfo = () => {
      var movieInfo = {
          title: this.state.title,
          director: this.state.director,
          year: this.state.year,
          rating: this.state.rating,
          poster_url: this.state.poster_url
      }

      fetch('http://localhost:3002/movies', {
          method: 'POST',
          body: JSON.stringify(movieInfo),
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json; charset=utf - 8'
          }
      })
          .then(alert('Confirmed!'))
  }

  render() {
    return (
      <>
        <Router>
          <div>
            <Header />
              <Switch>
                <Route exact path='/' render={HomePage} />
                <Route exact path='/movies' render={(props) => <IndexPage {...props} delete={this.deleteMovie} movies={this.state.movies} getMovie={this.getMovieById} />} />
                <Route exact path='/movies/createMovie' render={(props) => <CreateMovie post={this.postMovieInfo} handleChange={this.handleChange} />} />
                <Route exact path='/movies/:id' render={(props) => <MoviePage {...props} getMovie={this.getMovieById} oneMovie={this.state.oneMovie} />} />
                <Route exact path='/movies/:id/edit' render={(props) => <EditPage {...props} oneMovie={this.state.oneMovie} />} />
              </Switch>
            <Footer />
          </div>
        </Router>
      </>
    );
  }
}

export default App
