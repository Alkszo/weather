import React, { useState } from 'react';

const Error = ({ onSearch }) => {
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(text)
    }
    return (
        <>
        <h1>Error!!!!!</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} />
                <input type="submit" value="Search" />
            </form>
        </div>

        </>
    )
}

export default Error;