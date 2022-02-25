import React from 'react';

const WeatherFiveDayCity = ({weather,setDay}) => {
    return (
        <div className="fives__city">
            <h2>{weather.name}</h2>
            <button className="fives__btn" onClick={()=> setDay('one')}>Back</button>
        </div>
    );
};

export default WeatherFiveDayCity;