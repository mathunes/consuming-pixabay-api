import React, { Component } from 'react';
import './style.css';
import searchIcon from '../../assets/image/search.png';

export default class SearchBar extends Component {

    constructor() {
        super();
        this.state = {
            text: '',
        }
        this.setText = this.setText.bind(this);
        this.searchImage = this.searchImage.bind(this);
    }

    setText() {
        this.setState({
            text: document.querySelector('.container input').value,
        });
    }

    searchImage(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.text)
    }

    render() {
        return (
            <div className="container search-bar">
                <h1>Pi<span>x</span>abay <span>API</span></h1>
                <form onSubmit={this.searchImage}>
                    <input 
                        type="text" 
                        value={this.state.value} 
                        placeholder="Pesquisar imagem..." onChange={this.setText}></input>
                    {/* <input type="submit"></input> */}
                    <button type="submit">
                        <img src={searchIcon} type="submit" alt="Search icon" />
                    </button>
                    
                </form>
            </div>
        )
    }
}