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
    fetch('https://treymoviecrudbackend.herokuapp.com/movies' || 'http://localhost:3002/movies')
      .then(res => res.json())
      .then(movies => this.setState({ movies }))
  }

  deleteMovie = (id) => {
    fetch('https://treymoviecrudbackend.herokuapp.com/movies/' || 'http://localhost:3002/movies' + id, {method: "DELETE"})
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
