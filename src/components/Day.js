import React from 'react';
import Moment from 'react-moment';
import DayDetails from './DayDetails'

const Day = ({ data, icons, getIcon }) => {

    const afternoon = () => data.filter(datum => datum.dt_txt.includes('15:00'))
    const represent = afternoon().length === 1 ? afternoon() : data.slice(-1)
    console.log(data, represent)
    return(
        <>
        <div className="day-card">
            <div>                
                <Moment format="dddd Do of MMMM YYYY">
                    {data[0].dt_txt}
                </Moment>        
            </div>        
            
        
        <img src={getIcon(represent[0]).length === 1  ? getIcon(represent[0])[0].icon  : `http://openweathermap.org/img/wn/${represent[0].weather[0].icon}@2x.png`} alt="icon" />
        <div><p>{represent[0].weather[0].description}</p></div>
        <div>temperature: {(represent[0].main.temp * 2).toFixed() / 2}</div>
        <div>feels like: {(represent[0].main.feels_like * 2).toFixed() / 2}</div>
        <div>humidity: {represent[0].main.humidity} %</div>
        <DayDetails data={data} icons={icons} getIcon={getIcon}/>
        </div>
        </>
    )
}

export default Day
