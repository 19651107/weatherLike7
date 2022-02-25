import React from 'react';
import axios from "axios";

const Form = ({setWeather,city,setCity}) => {

    const getWeather = () => {
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7d4e4e65112c1872fb8be75bb70cde8`)
            .then(({data})=> setWeather(data))
            .catch(()=> alert('Введите корректный город!'))
    }

    return (
        <>
            <h2 className="form__title">Прогноз погоды</h2>
            <label htmlFor="">
                <input placeholder="Введите город" className="form__input" type="text" value={city} onChange={(e)=> setCity(e.target.value)}/>
                <button className="form__btn" type="button" onClick={()=>getWeather()}>Получить</button>
            </label>
    </>
    );
};

export default Form;