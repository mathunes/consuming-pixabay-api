import React from 'react';
import loadingIcon from '../../assets/image/loading.gif';
import './style.css';

const Load = () => (
    <div className="loading-container">
        <img src={loadingIcon} alt="Loading" />
    </div>
)

export default Load;