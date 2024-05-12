import React, { useState, useEffect, createContext } from 'react'
import WeatherDetails from './WeatherDetails';
import './Styles.css'

export const WeatherInfo = createContext()
function Search() {
    const [searchTerm, setSearchTerm] = useState('delhi')
    const [tempInfo, setTempInfo] = useState({})

    //useEffect
    //Async function
    //Promises
    //Try and catch

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=9a1116406b6a18f2f5dca29b4f350361`

            let res = await fetch(url)
            let data = await res.json()
            const { temp, humidity, pressure } = data.main            
            const { main: weatherType } = data.weather[0]
            const  name  = data.name
            const { speed } = data.wind
            const { country, sunset } = data.sys 
            const myNewWeatherInfo = {
                temp, humidity, pressure, weatherType, name, speed, country, sunset
            }
            setTempInfo(myNewWeatherInfo)
        } catch (error) {
            console.log(error.message);
        }

    }
    // console.log(tempInfo);

    useEffect(() => {
        getWeatherInfo()
    }, [])
  return (
    <>
    <WeatherInfo.Provider value={{tempInfo, setTempInfo}} className='wrap'>
     
  
  <form>
    <div class="form-group d-flex" >
      <input type="text" class="form-control" placeholder='Search city name...' onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}/>
      <button type="button" class="btn btn-primary" onClick={getWeatherInfo}>Search</button>
    </div>
   
  </form>
    <WeatherDetails />
    </WeatherInfo.Provider>
    </>
  )
}

export default Search


