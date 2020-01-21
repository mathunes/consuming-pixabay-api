import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import searchPhotos from './api';
import Images from '../Images';
import Error from '../Error';
import Load from '../Load';

export default class App extends Component {

  state = {
    images: [],
    error: false,
    loading: false
  }

  onSearchSubmit = async (text) => {
    this.setState({
      loading: true
    })

    const response = await searchPhotos(text);

    if (parseInt(response.data.totalHits) > 0) {
      this.setState({
        images: response.data.hits,
        error: false      
      })

    } else {
      this.setState({
        error: true,
      })
      
    }

    this.setState({
      loading: false
    })
    
  }

  componentDidMount() {
    this.onSearchSubmit('');
  }


  render() {
    return (
      <div className="App">

        <SearchBar onSubmit={this.onSearchSubmit}/>

        {
          (this.state.loading) ? <Load /> : (this.state.error) ? <Error /> : <Images images={this.state.images} />
        }
        

      </div>
    )
  }
}