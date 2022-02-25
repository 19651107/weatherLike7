import React, {useState} from 'react'
import './style.css'
import Form from "./components/Form/Form";
import Weather from "./components/Weather/Weather";
import axios from "axios";
import WeatherFiveDay from "./components/WeatherFiveDay/WeatherFiveDay";
import Vanta from "./components/Vanta/Vanta";

function App() {

    const [weather, setWeather] = useState({})
    const [city, setCity] = useState('')
    const [switches, setSwitches] = useState('°C')
    const [weatherFive, setWeatherFive] = useState({})
    const [day, setDay] = useState('one')
    const [date,setDate] = useState('');

    const getWeatherFiveDay = () => {
        axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d7d4e4e65112c1872fb8be75bb70cde8`)
            .then(({data}) => {
                setWeatherFive(data)
                setDate(data.list[0].dt_txt.slice(0,10))
            })
        setDay('five')
    }

    return (
        <div className="App">
            <Vanta/>
            {day === 'one' ? <div className="form">
                <Form city={city} setCity={setCity} setWeather={setWeather}/>
                {JSON.stringify(weather) === '{}' ? '' :
                    <>
                        <Weather weather={weather} switches={switches} setSwitches={setSwitches}/>
                        <button className="fiveDay" type="button" onClick={getWeatherFiveDay}>Получить погоду на 5
                            дней
                        </button>
                    </>
                }
            </div> : <WeatherFiveDay date={date} setDate={setDate} setDay={setDay} weather={weather} switches={switches} setSwitches={setSwitches} weatherFive={weatherFive}/>}

        </div>
    );
}

export default App;
