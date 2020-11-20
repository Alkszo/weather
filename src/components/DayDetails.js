import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const DayDetails = ({ data, icons, getIcon }) => {
    
    return (
        
        <Popup trigger={<button className="details-button"> Show detailed forcast</button>} position="top" className="weather-details" modal>
        
        
        {data.map(hour => 
    <>
    <div className="weather-detailed-description">
        <div>
        <p style={{color: `red`}}>{hour.dt_txt.slice(11, 16)}</p>    
        </div>
        <div className="weather-info">

        <div>
        <img src={getIcon(hour).length === 1  ? getIcon(hour)[0].icon  : `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} alt="icon" />
        <p>{hour.weather[0].description}</p>
        </div>
        <div><p>Temperature: </p><br/>
        <p>  {(hour.main.temp * 2).toFixed() / 2} </p>                  
        </div>
        <div><p>Feels like: </p><br />
            <p>{(hour.main.feels_like * 2).toFixed() / 2}</p>
        </div>
        <div><p>Humidity: </p><br />
            <p>{hour.main.humidity} %</p>
        </div>

        </div>
    </div>

   
    
    </>
    )}
     
    
        </Popup>
    )
}

export default DayDetails