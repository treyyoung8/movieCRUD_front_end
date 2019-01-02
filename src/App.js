import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/header'
import Footer from './Components/footer'
import HomePage from './Components/homePage'
import IndexPage from './Components/indexPage'

class App extends Component {
  state = {
    movies: []
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

  render() {
    return (
      <>
        <Router>
          <div>
            <Header />
              <Switch>
                <Route exact path='/' render={HomePage} />
                <Route exact path='/index' render={(props) => <IndexPage {...props} delete={this.deleteMovie} movies={this.state.movies} />} />
              </Switch>
            <Footer />
          </div>
        </Router>
      </>
    );
  }
}

export default App
