import React from 'react';
import CurrentWeather from './CurrentWeather';
import Title from './Title'
import Search from './Search'
import DaysList from './DaysList';
import clearSky from './images/icons/clear sky.jpg'
import fewClouds from './images/icons/fewClouds.JPG'
import overcastClouds from './images/icons/overcastClouds.JPG'
import scatteredClouds from './images/icons/scatteredClouds.JPG'
import showerRain from './images/icons/showerRain.JPG'
import rain from './images/icons/rain.JPG'
import thunder from './images/icons/thunder.JPG'
import snow from './images/icons/snow.JPG'
import mist from './images/icons/mist.JPG'
import moon from './images/icons/moon.JPG'
import moonClouds from './images/icons/moonClouds.JPG'
import january from './images/months/January.jpg'
import february from './images/months/February.jpg'
import march from './images/months/March.jpg'
import april from './images/months/April.jpg'
import may from './images/months/May.jpg'
import june from './images/months/June.jpg'
import july from './images/months/July.jpg'
import august from './images/months/August.jpg'
import september from './images/months/September.jpg'
import october from './images/months/October.jpg'
import november from './images/months/November.jpg'
import december from './images/months/December.jpg'

const today = new Date
const mon = today.getMonth()
const bcgImages = [january, february, march, april, may, june, july, august, september, october, november, december]



const icons = [
    {
        id: '01d',
        icon: `${clearSky}`
    },
    {
        id: '01n',
        icon: `${moon}`
    },
    {
        id: '02d',
        icon: `${fewClouds}`
    },
    {
        id: '02n',
        icon: `${moonClouds}`
    },
    {
        id: '03',
        icon: `${scatteredClouds}`
    },
    {
        id: '04',
        icon: `${overcastClouds}`
    },
    {
        id: '09',
        icon: `${showerRain}`
    },
    {
        id: '10',
        icon: `${rain}`
    },
    {
        id: '11',
        icon: `${thunder}`
    },
    {
        id: '13',
        icon: `${snow}`
    },
    {
        id: '50',
        icon: `${mist}`
    },
    
]

const getIcon = (forcast) => {
   return icons.filter(icon => forcast.weather[0].icon.includes(icon.id))
}

const Home = ({ data, onSearch }) => {
    
    
    return (
       <>
       
       <Search onSearch={onSearch}/>
       <Title data={data} />
       <div className="home" style={{backgroundImage: `url(${bcgImages[mon]})`}}>        
        
        <CurrentWeather data={data.list} icons={icons} getIcon={getIcon}/>
        <DaysList data={data.list} icons={icons} getIcon={getIcon}/>
       </div>
       </>
    )
}

export default Home;