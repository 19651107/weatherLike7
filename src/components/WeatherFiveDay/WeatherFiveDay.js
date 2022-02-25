import React from 'react';
import WeatherFiveDayCity from "./WeatherFiveDayCity";
import WeatherCard from "./WeatherCard";

const WeatherFiveDay = ({date,setDate,setDay,weather,switches,setSwitches,weatherFive}) => {


    return (
        <div className="fives">
            <div className="container">
                <WeatherFiveDayCity weather={weather} setDay={setDay}/>
                <div className="getWeather">
                       <WeatherCard weather={weather} switches={switches} setSwitches={setSwitches}/>
                    <p className="getWeather__hum">Влажность : {weather.main.humidity}%</p>
                    <p className="getWeather__hum">{weather.weather[0].description}</p>
                </div>
                {JSON.stringify(weatherFive) === '{}' ? '' : <>
                    <div className="buttons">
                        {weatherFive.list.map((item)=> item.dt_txt.slice(0,10)).filter((item,idx,array)=> array.indexOf(item) === idx).map((item,idx)=>{
                            return (
                                <button className="buttons__btn" key={item} type="button"  onClick={()=> setDate(item)}>{item}</button>
                            )
                        })}
                    </div>
                    <div className="weather__row">
                        {weatherFive.list.filter((item)=> item.dt_txt.includes(date)).map((item)=> {
                            return (
                                <div className="weather__get" key={item.dt_txt}>
                                    <span>{item.dt_txt.slice(10)}</span>
                                    <div>
                                        <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather"/>
                                        <p className="weather__get-temp">{Math.round(item.main.temp - 273.15)} <span className="qwerty">°C</span></p>
                                        <p>{item.weather[0].description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>
                }
            </div>
        </div>
    );
};

export default WeatherFiveDay;