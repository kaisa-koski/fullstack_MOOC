import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Weather = ({ city }) => {

    const api_key = process.env.REACT_APP_API_KEY

    const [weather, setWeather] = useState('')

    const params = {
        access_key: api_key,
        query: { city }
    }
    useEffect(() => {
        axios.get('http://api.weatherstack.com/current', { params })
            .then(response => {
                 setWeather(response.data)
            })
    }, [])


if (weather.hasOwnProperty('current')) return ( // TODO: Error käsittelyn voisi tehdä myöhemmin tehokkaammin/tyylikkäämmin
    <div>
        <h2>Weather in {city}</h2>
        <p><strong>temperature:</strong> {weather.current.temperature} Celcius</p>
        <p> <img src={weather.current.weather_icons[0]} alt='weather icon'/></p>
        <p><strong>wind:</strong> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
    </div>
)
if (weather.hasOwnProperty('error')) return (
    <div>
            Error when loading weather: {weather.error.info}
        </div>
)
else 
 return (
        <div>
            Loading weather...
        </div>
    )
}

export default Weather