import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Loading from './Loading';
import LocationError from './LocationEroor';
import SearchError from './SearchError';
import './App.css';
import key from './keys';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      data: null,
      searchError: false,
      lacationError: false,      
    }
  }

  componentDidMount() {
    this.getLocation()
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      this.fetchData(lat, lon);      
    }, () => this.setState({ locationError: true }))
  }

  fetchData = (lat, lon) => {         
      fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
      .then(res => res.json())
      .then(data => {
        this.setState({ 
        data,        
     })
    })
  }

  onSearch = (text) => {
    
    this.setState({ searchError: false, locationError: false})
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${text}&appid=44b75055e774cc3ad102fa969f7e72c6&units=metric`)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        this.setState({ searchError: true })
      }
    })
      .then(data => {
        this.setState({
          data,
        })
      })
      .catch(this.setState({ searchError: true}))      
  }


  render () {    
    const { data } = this.state
    const renderData = () => {
      if (data) {
        return <Home data={data} onSearch={this.onSearch}/>
      } else if (this.state.locationError && !this.state.searchError) {
        return <LocationError onSearch={this.onSearch} getLocation={this.getLocation}/>
      } else if (this.state.searchError) {
        return <SearchError onSearch={this.onSearch}/>
      } else {
        return <Loading />
      }
    }
    
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => renderData()} />
          <Route path='/about' component={About} />
        </Switch>
      
      </>
    );
  }
}

export default App;


 /*
        
       
        <Footer />
        */