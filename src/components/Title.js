import React from 'react'

const Title = ({ data }) => {    
    return (
    <div className="title"><span className="red">T</span>his is the weather in <span className="red">{data.city.name[0]}</span>{data.city.name.slice(1)}</div>
    )
};

export default Title