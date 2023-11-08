import React, { useEffect, useState } from 'react'

const WeatherCard = ({ tempInfo }) => {
  const { temp, humidity, weatherMood, name, speed, country, sunset, sunrise } =
    tempInfo
  const [weatherState, setWeatherState] = useState('')

  const getTime = (value) => {
    let sec = value
    let date = new Date(sec * 1000)
    let timeStr = `${date.getHours()}:${date.getMinutes()}`
    return timeStr
  }

  useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case 'Haze':
          setWeatherState('wi-day-haze')
          break

        case 'Clouds':
          setWeatherState('wi-cloud')
          break

        case 'Clear':
          setWeatherState('wi-day-sunny')
          break

        case 'Smoke':
          setWeatherState('wi-day-fog')
          break

        case 'Mist':
          setWeatherState('wi-day-sprinkle')
          break

        case 'Rain':
          setWeatherState('wi-day-rain')
          break
        case 'Sunny':
          setWeatherState('wi-hot')
          break

        case 'Snow':
          setWeatherState('wi-day-snow')
          break

        default:
          setWeatherState('wi-day-sleet')
      }
    }
  }, [weatherMood])

  return (
    <>
      <article className='widget'>
        <div className='weatherIcon'>
          <i className={`wi ${weatherState}`}></i>
          {/* {weather} */}
        </div>
        <div className='weatherInfo'>
          <div className='temperature'>
            <span>{temp}&deg;</span>
          </div>

          <div className='description'>
            <div className='weatherCondition'>{weatherMood}</div>

            <div className='place'>
              {name} {country}
            </div>
          </div>
        </div>
        <div className='date'>{new Date().toLocaleString()}</div>

        <div className='extra-temp'>
          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-sunset'}></i>
              </p>
              <p className='extra-info-leftside'>
                {getTime(sunrise)} AM <br /> Sunrise
              </p>
            </div>

            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-humidity'}></i>
              </p>
              <p className='extra-info-leftside'>
                {humidity} <br /> Humidity
              </p>
            </div>
          </div>

          <div className='weather-extra-info'>
            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-strong-wind'}></i>
              </p>
              <p className='extra-info-leftside'>
                {speed}
                <br /> Speed
              </p>
            </div>

            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-moonrise'}></i>
              </p>
              <p className='extra-info-leftside'>
                {getTime(sunset)} PM
                <br /> Sunset
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default WeatherCard
