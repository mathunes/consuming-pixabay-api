import React, { Component } from 'react';
import './style.css';

export default class Images extends Component {

    render() {
        return (
            <div className="container container-img">
                {/* <div className="container-img-item"> */}
                    {this.props.images.map((image) => {
                        return (
                            <img src={image.largeImageURL} key={image.id} />
                        )
                    }
                    )}
                {/* </div> */}
            </div>
        )
    }
}
