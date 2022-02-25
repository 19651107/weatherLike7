import React from 'react';

const WeatherMiddle = ({weather,switches,setSwitches}) => {
    return (
        <div className="weather__middle">
            <img className="weather__img" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="WEATHERICON"/>
            <span className="weather__temp">{Math.round(switches === '°C' ? weather.main.temp - 273.15 : 1.8 * (weather.main.temp - 273) + 32)}</span>
            <div className="weather__farens">
                <span className={`weather__farens-cel ${switches === '°C' ? 'active' : ''}`} onClick={()=> setSwitches('°C')}>°C</span>
                |
                <span className={`weather__farens-far ${switches === '°F' ? 'active' : ''}`} onClick={()=> setSwitches('°F')}>°F</span>
            </div>
            <p className="weather__descr">{weather.weather[0].description}</p>
        </div>
    );
};

export default WeatherMiddle;