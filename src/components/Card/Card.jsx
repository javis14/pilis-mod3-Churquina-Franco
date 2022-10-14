
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { getInfoWeather } from '../../service';

const Card = ({ card }) => {

    const[infoWeather, setInfoWeather] = useState([])
    const[city, setCity] =useState('holas')
    /* const {city, latitud, longitud} =card */

/*     -24.74804232879772, -65.41076042043174
 */
    useEffect (() => {
    getInfoWeather() 
    .then((datos) => {
        setInfoWeather(datos.current_weather)

    })
  }, [])

  return (
    <div>
        <h1>Ciudad: {city} </h1>
        <h2> Temperatura :{infoWeather.temperature} </h2>
        <h2> Velocidad del viento: {infoWeather.windspeed} </h2>
    </div>

  
    )
}

export default Card