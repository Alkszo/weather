import React from 'react';
import Moment from 'react-moment';
import CurrentWeatherDetails from './CurrentWeatherDetails';

const CurrentWeather = ({ data, icons, getIcon }) => {
    const today = data[0].dt_txt.slice(0, 10)
    let todaysWeather = []
    data.map(datum => datum.dt_txt.includes(today) ? todaysWeather.push(datum) : todaysWeather)    
       
    return (
    
        <div className='current-card'>
            <div>                
                    <Moment format="dddd Do of MMMM YYYY">
                        {data[0].dt_txt}
                    </Moment>        
            </div>  

            <img src={getIcon(data[0]).length === 1 ? getIcon(data[0])[0].icon : `http://openweathermap.org/img/wn/${data[0].weather[0].icon}@2x.png`} alt="icon" />
            <div><p>{data[0].weather[0].description}</p></div>
            <div>Temperature: {(data[0].main.temp * 2).toFixed() / 2}</div>
            <div>Feels like: {(data[0].main.feels_like * 2).toFixed() / 2}</div>
            <div>Humidity: {data[0].main.humidity} %</div>
            <CurrentWeatherDetails todaysWeather={todaysWeather} icons={icons} getIcon={getIcon}/>
        </div>
    
    )
}

export default CurrentWeather;