import React, { useState } from 'react';
import map from './images/beatus-medieval-map.jpg'


const SearchError = ({ onSearch }) => {
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
            <h1><span className="red">O</span>ur cartographers are <span className="red">confused</span>!</h1>
            <div className="error-search">
                <div>
                    <p><span className="red">W</span>e regret to admit that we ware unable to find the place, you ware looking for. <br />
                    <span className="red">P</span>lease try again with another search request.</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className="search">
                        <input type="text" onChange={handleChange} />
                        <input type="submit" value="Search" />
                    </form>
                </div>
            </div>
            <img className="search-img" src={map}/>
        </div>
        
    )
}

export default SearchError;