import React, { Component } from 'react';

export default class Images extends Component {

    render() {
        return (
            <div className="container">
                {this.props.images.map((image) => {
                    return (
                        <img src={image.largeImageURL} key={image.id} alt="car"/>
                    )
                }
                )}
            </div>
        )
    }
}
