import React, { useState } from 'react';
import map from './images/where-in-tabula.jpg'

const LocationError = ({ onSearch, getLocation }) => {
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(text)
    }
    return (
        <div className="error-page">
            <h1><span className="red">O</span>ur astrologers are <span className="red">clueless</span>!</h1>
            <div className="error-search">
                <div>
                    <p><span className="red">S</span>adly we ware unable to determine, where in the <span className="red">W</span>orld are you. <br />
                    <span className="red">P</span>lease allow geolocation in your browser or enter the name of a place you want to get forcast for. </p>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className="search">
                        <input type="text" onChange={handleChange} />
                        <input type="submit" value="Search" className="submit-button" />
                    </form>
                </div>
            </div>
            <img className="location-img" src={map}/>
        </div>
    )
}

export default LocationError;