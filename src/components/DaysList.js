import React, { useState, useEffect } from 'react'
import Day from './Day'

const DaysList = ({ data, icons, getIcon }) => {

const tomorrow = data[7].dt_txt.slice(0, 10)
const secondDay = data[15].dt_txt.slice(0, 10)
const thirdDay = data[23].dt_txt.slice(0, 10)
const fourthDay = data[31].dt_txt.slice(0, 10)
const fifthDay = data[39].dt_txt.slice(0, 10)

const weatherTomorrow = data.filter(datum => datum.dt_txt.includes(tomorrow))
const weatherSecondDay = data.filter(datum => datum.dt_txt.includes(secondDay))
const weatherThirdDay = data.filter(datum => datum.dt_txt.includes(thirdDay))
const weatherFourthDay = data.filter(datum => datum.dt_txt.includes(fourthDay))
const weatherFifthDay = data.filter(datum => datum.dt_txt.includes(fifthDay))

const combinedWeather = [weatherTomorrow, weatherSecondDay, weatherThirdDay, weatherFourthDay, weatherFifthDay]


const [dailyData, setDailyData] = useState([]);

useEffect(() => 
    setData(), [data])

const setData = () => {
    setDailyData(
        combinedWeather
    )
}

    return (
        <>
            <h2><span>Five days forcast</span></h2>
        <div className="days-list">
            {
                dailyData.map(day => <Day data={day} icons={icons} key={day.dt_txt} getIcon={getIcon}/>)
            }
        </div>
        </>
    )
}

export default DaysList
