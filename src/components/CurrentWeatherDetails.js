import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const CurrentWeatherDetails = ({ todaysWeather, icons, getIcon }) => {  
        
    return (
    <Popup trigger={<button className="details-button"> Show detailed forcast</button>} position="center" className="weather-details" modal>      
              
        {todaysWeather.map(hour => 
            
        
        <div className="weather-detailed-description">
            <div>
                <p style={{color: `red`}}>{hour.dt_txt.slice(11, 16)}</p>    
            </div>
            <div className="weather-info">
    
                <div className="weather-icon">
                    <div>
                    <img src={getIcon(hour).length === 1  ? getIcon(hour)[0].icon : `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} alt="icon" />
                    </div>
                    <div>
                    <p>{hour.weather[0].description}</p>
                    </div>
                </div>
                <div className="weather-numbers">
                    <div><p>Temperature: {(hour.main.temp * 2).toFixed() / 2} &deg;C</p>                  
                    </div>
                    <div><p>Feels like: {(hour.main.feels_like * 2).toFixed() / 2} &deg;C</p>
                    </div>
                    <div><p>Humidity: {hour.main.humidity} %</p>
                    </div>
                </div>
        
            </div>
        </div>     
        
        )}
    </Popup>
    )
}

export default CurrentWeatherDetails