import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import IndexPage from './Components/indexPage';

class App extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch('http://localhost:3002/movies')
      .then(res => res.json())
      .then(movies => this.setState({ movies }));
  }

  render() {
    return (
      <>
        <Header />
        <IndexPage movies={this.state.movies} />
        <Footer />
      </>
    );
  }
}

export default App;
