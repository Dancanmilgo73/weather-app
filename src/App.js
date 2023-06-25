import React, {useState} from 'react';
import SeachBar from './SeachBar';
import DisplayWeather from './DisplayWeather';
// Feel free to use thei mock response if you do have an api key to use
const mockResult = {
  "coord": {
    "lon": 10.99,
    "lat": 44.34
  },
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.48,
    "feels_like": 298.74,
    "temp_min": 297.56,
    "temp_max": 300.05,
    "pressure": 1015,
    "humidity": 64,
    "sea_level": 1015,
    "grnd_level": 933
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.62,
    "deg": 349,
    "gust": 1.18
  },
  "rain": {
    "1h": 3.16
  },
  "clouds": {
    "all": 100
  },
  "dt": 1661870592,
  "sys": {
    "type": 2,
    "id": 2075663,
    "country": "IT",
    "sunrise": 1661834187,
    "sunset": 1661882248
  },
  "timezone": 7200,
  "id": 3163858,
  "name": "Zocca",
  "cod": 200
};

const api = {
  key: "",
  base: "https://api.openweathermap.org/data/2.5/"
};

const initialState = {weather: {}, query: ''};
function App() {
  const [state, setState] = useState(initialState);

  const search = evt => {
    evt.preventDefault();
      fetch(`${ api.base }weather?q=${ state.query }&units=metric&appid=${ api.key }`)
        .then(res => res.json())
        .then(result => {
          setState(prev => ({
            ...prev,
            query: '',
            weather: result
          }));
        });
  };

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  const handleQueryInput = (input) => {
    setState(prev => ({
      ...prev,
      query: input
    }));
  };
  return (
    <div className={
      (typeof state.weather.main != "undefined")
       ? ((state.weather.main.temp > 16) ? "app warm"
        : "app")
        : "app"}>
      <main>
        <SeachBar
          handleQueryInput={ handleQueryInput }
          search={ search }
          query={state.query}
        />
        <DisplayWeather
          dateBuilder={ dateBuilder }
          weather={state.weather}
        />
      </main>
    </div>
  );
}

export default App;
