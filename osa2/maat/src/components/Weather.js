import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Weather = ({ city }) => {

    const api_key = process.env.REACT_APP_API_KEY

    const [weather, setWeather] = useState()
    console.log(weather);

    const params = {
        access_key: api_key,
        query: { city }
    }
    useEffect(() => {
        axios.get('http://api.weatherstack.com/current', { params })
            .then(response => {
                setWeather(response.data)
                console.log(response.data) 
            })
    }, [])


  
    if (weather.success === false) return ( //TODO: Ei toimi jos api_key ei toimi
        <div>Unable to oad weather</div>
    )
      
    else return (
        <div>
            <h2>Weather in {city}</h2>
            <p><strong>temperature:</strong> {weather.current.temperature} Celcius</p>
            <p> <img src={weather.current.weather_icons[0]} /></p>
            <p><strong>wind:</strong> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
        </div>
    )
}

export default Weather