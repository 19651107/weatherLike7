import React from 'react';

const WeatherTop = ({weather}) => {
    return (
        <div className="weather__top">
            <h2>{weather.name}</h2>
            <h2>{weather.sys.country}</h2>
        </div>
    );
};

export default WeatherTop;