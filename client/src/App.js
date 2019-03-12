import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


class App extends Component {
  state = {
    message: '',
    link: ''
  }

  async componentDidMount() {
    const response = await axios.get('http://localhost:5000/')
    const { data } = await response
    this.setState({ message: data.message, link: data.link })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            You're connected to your express backend server. Awesome!
          </p>
          <a className="App-link" href={this.state.link} target="_blank" rel="noopener noreferrer">
            Visit your backend server
          </a>
        </header>
      </div>
    );
  }
}

export default App;