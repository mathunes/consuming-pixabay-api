import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import searchPhotos from './api';
import Images from '../Images';

export default class App extends Component {

  state = {
    images: [],
  }

  onSearchSubmit = async (text) => {
    const response = await searchPhotos(text);

    this.setState({
      images: response.data.hits
    })
    
  }

  render() {
    return (
      <div className="App">

        <SearchBar onSubmit={this.onSearchSubmit}/>
        <Images images={this.state.images} />

      </div>
    )
  }
}