import React, {useEffect, useContext, useState} from 'react'
import { WeatherInfo } from './Search'

function WeatherDetails() {
    const { tempInfo } = useContext(WeatherInfo)
    // converting seconds in hrs 
    const [ weatherState, setWeatherState ] = useState('')
    useEffect(() => {
        if(tempInfo.weatherType) {
            switch(tempInfo.weatherType) {
                case 'Clouds':
                    setWeatherState('wi-day-cloudy');
                    break;
                case 'Haze':
                    setWeatherState('wi-fog')
                    break;
                case 'Clear':
                    setWeatherState('wi-day-sunny');
                    break;
                case 'Mist':
                    setWeatherState('wi-dusk')
                    break;
                case 'Rain':
                    setWeatherState('wi-day-rain')
                    break;
                default: setWeatherState('wi-day-sunny')
                break;
            }
        }
    }, [tempInfo.weatherType])

    let sec = tempInfo.sunset
    let date = new Date(sec * 1000)
    let timeStr = `${date.getHours()}: ${date.getMinutes()}`
    
    // console.log(setTempInfo);
  return (
    <div className='widget'>
        <div className="weatherIcon">
            <i className={`${weatherState}`}></i>
            {/* `${weatherState}` */}

        </div>
        <div className="weatherInfo">
            <div className="temperature">
                <span>{tempInfo.temp}&deg;</span>
            </div>
            <div className="description">
                <div className="weatherCondition">{tempInfo.weatherType}</div>
                <div className="place">{tempInfo.name}, {tempInfo.country}</div>
            </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
            <div className="temp-info-minmax">
                <div className="two-sided-section">
                    <p>
                        <i className="wi wi-sunset"></i>
                    </p>
                    <p className="extra-info-leftside">
                        {timeStr} PM <br /> 
                        sunset 
                    </p>
                </div>
                <div className="two-sided-section">
                    <p>
                        <i className="wi wi-humidity"></i>
                    </p>
                    <p className="extra-info-leftside">
                        {tempInfo.humidity} <br />
                        Humidity 
                    </p>
                </div>
            </div>

            <div className="weather-extra-info">

                <div className="two-sided-section">
                    <p>
                        <i className="wi wi-rain"></i>
                    </p>
                    <p className="extra-info-leftside">
                        {tempInfo.pressure} <br />
                        pressure
                    </p>
                </div>
                
                <div className="two-sided-section">
                    <p>
                        <i className="wi wi-strong-wind"></i>
                    </p>
                    <p className="extra-info-leftside">
                        {tempInfo.speed} <br />
                        speed
                    </p>
                </div>
            </div>
            </div>
    </div>
  )
}

export default WeatherDetails
