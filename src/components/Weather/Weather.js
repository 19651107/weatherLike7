import React from 'react';
import WeatherTop from "./WeatherTop/WeatherTop";
import WeatherMiddle from "./WeatherMiddle/WeatherMiddle";

const Weather = ({weather,switches,setSwitches}) => {

    const toDate = (date) => {
        return new Intl.DateTimeFormat('ru-Ru', {
            day:'2-digit',
            month:'long',
            year:'numeric',
            hour:'2-digit',
            minute:'2-digit',
            second:'2-digit'
        }).format(new Date(date))
    }


    return (
        <div className="weather">
            <WeatherTop weather={weather}/>
            <WeatherMiddle weather={weather} switches={switches} setSwitches={setSwitches}/>
            <p className="weather__time">{toDate(Date.now())}</p>
            <p className="weather__hum">Взложность : {weather.main.humidity} %</p>
        </div>
    );
};

export default Weather;