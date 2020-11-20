import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(text)
    }

      
        return (
        
        <div className="main-search">
            <div>
                <p><span className="red">E</span>nter the name of a city or region to display <span className="red">w</span>eather</p>
            </div>
            <div>            
                <form onSubmit={handleSubmit} className="search">
                    <input type="text" onChange={handleChange} />
                    <input type="submit" value="Search" />
                </form>
            </div>
        </div>
        
        )
    
}

export default Search;