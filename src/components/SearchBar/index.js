import React, { Component } from 'react';

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

    searchImage() {
        this.props = this.state.text
    }

    render() {
        return (
            <div className="container">
                <input 
                    type="text" 
                    value={this.state.value} 
                    placeholder="Pesquisar imagem..." onChange={this.setText}></input>
                <input type="submit" value="Pesquisar" onClick={this.searchImage}/>   
            </div>
        )
    }
}