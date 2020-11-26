import React from 'react';
import compass from './images/compass.jpg'

const Loading = () => {
    return (
        <div className="loading">
            <p><span className="red">L</span>oading........</p>          
            <img src={compass}/>                       
        </div>
    )
}

export default Loading;