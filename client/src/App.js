import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hotels: []
    }
  }
  render() {
    const { hotels } = this.state;

    return hotels.length ? (
      <div className="App">{hotels[0].name}</div>
    ) : null;
  }

  componentDidMount() {
    axios
    .get('/api/hotels')
    .then(({ data }) => {
      console.log('hotels', data);
      this.setState({ hotels: data });
    });
  }
}

export default App;
