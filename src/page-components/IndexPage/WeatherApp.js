/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useState } from 'react';

// Helpers & utils
import axios from 'axios';

// Style
import './index.scss';

export default function WeatherApp() {
  /* ******************************** CONSTANTS ******************************* */
  const URL = 'http://api.openweathermap.org/data/2.5/weather';
  const INITIAL_STATE = {
    sys: {
      country: '',
    },
    main: {
      temp: '',
    },
    weather: [
      {
        icon: '',
        description: '',
      },
    ],
  };
  /* ********************************** HOOKS ********************************* */
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [query, setQuery] = useState(INITIAL_STATE);

  /* ******************************** CALLBACKS ******************************* */
  function onHandleSearch(e) {
    e.preventDefault();
    setError(false);
    axios(URL, {
      params: {
        q: search,
        appid: 'f33a484cf794d08d0148764789aaba32',
        units: 'metric',
      },
    })
      .then(({ data }) => {
        setQuery(data);
      })
      .catch(() => {
        setError(true);
        setQuery(INITIAL_STATE);
      });
  }
  /* ***************************** RENDER HELPERS ***************************** */
  function getWeatherIcon(icon) {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  }
  /* ******************************** RENDERING ******************************* */
  return (
    <div className="weather-app">
      <div className="background" />
      <div className="search-container">
        <form onSubmit={onHandleSearch}>
          <input
            className="input-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search"
          />
        </form>
        <div className="result">
          {error && <p>hello error!</p>}
          {!error && (
            <>
              <div className="name">
                <p>{query.name}</p>
                <p className="country">{query.sys.country}</p>
              </div>
              <p className="temp">
                {Math.round(query.main.temp)}
                °C
              </p>
              <div className="icon">
                <img
                  src={getWeatherIcon(query.weather[0].icon)}
                  alt="weather-icon"
                />
              </div>
              <div className="description">
                <p>{query.weather[0].description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
