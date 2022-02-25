import React from 'react';

const WeatherCard = ({switches,weather,setSwitches}) => {
    return (
        <div className="getWeather__card">
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather"/>
            <p className="getWeather__temp">{Math.round(switches === '°C' ? weather.main.temp - 273.15 : 1.8 * (weather.main.temp - 273.15) + 32)}</p>
            <div className="getWeather__switch">
                <span className={`getWeather__switch-cel ${switches === '°C' ? 'active' : ''}`} onClick={()=> setSwitches('°C')}>°C</span>
                |
                <span className={`getWeather__switch-far ${switches === '°F' ? 'active' : ''}`} onClick={()=> setSwitches('°F')}>°F</span>
            </div>
        </div>
    );
};

export default WeatherCard;