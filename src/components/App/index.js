import React, { Component } from 'react';
import SearchBar from '../SearchBar';

export default class App extends Component {

  state = {
    images: [],
  }

  render() {
    return (
      <div className="App">

        <SearchBar />

      </div>
    )
  }
}
