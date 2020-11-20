import React from 'react';
import compass from './images/compass.jpg'

const About = () => {
    return (
        <div className="about">
            <p><span className="red">T</span>his medieval-themed weather app was build as a side project by Aleksander Szostakowski. New features might or might not be added, time allowing.
                What can be said for certain is that after next Greek calends a Latin version will be made available. <br />
                <span className="red">T</span>he app uses <a href="https://openweathermap.org/api" target="_blank">Open Weather API</a> to acces fresh and (mostly) reliable informations about the state of the elements. <br />
                <span className="red">I</span>mages in the main site's background are taken from <a href="https://en.wikipedia.org/wiki/Tr%C3%A8s_Riches_Heures_du_Duc_de_Berry#:~:text=It%20is%20a%20book%20of,Berry%2C%20by%20the%20Limbourg%20brothers." target="_blank">The Book of Hours of the Duke of Berry</a> crafted by Limbourg brothers.
                They depict typical activities you might engage in during current month (well at least if you happen to live in the beginning of 15th century). <br />
                <span className="red">W</span>herever and whenever you are make sure to <span className="red">s</span>tay <span className="red">s</span>afe and enjoy your weather!
            </p>
            <img src={compass}/>        
        </div>
    )
}

export default About;