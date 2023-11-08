import React, { useEffect, useState } from 'react'
import './WeatherCard'
import './Weather.css'
import WeatherCard from './WeatherCard'

const Weather = () => {
  const [searchValue, setSearchValue] = useState('pune')
  const [tempInfo, setTempInfo] = useState('')

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${process.env.REACT_APP_SECRET_KEY}`

      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      const { temp, humidity } = data.main
      const { main: weatherMood } = data.weather[0]
      const { name } = data
      const { speed } = data.wind
      const { country, sunset, sunrise } = data.sys

      const myWeatherInfo = {
        temp,
        humidity,
        weatherMood,
        name,
        speed,
        country,
        sunset,
        sunrise,
      }

      setTempInfo(myWeatherInfo)
      console.log(myWeatherInfo, 'infoo')
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getWeatherInfo()
  }, [])

  return (
    <>
      <div className='wrap'>
        <div className='search'>
          <input
            type='search'
            placeholder='search...'
            autoFocus
            id='search'
            className='searchTerm'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          ></input>
          <button
            className='searchButton'
            type='button'
            onClick={() => getWeatherInfo()}
          >
            Search
          </button>
        </div>
      </div>

      <WeatherCard tempInfo={tempInfo} />
    </>
  )
}

export default Weather
