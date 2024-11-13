import './styles.css';
import {
  runWeather,
  setClientWeatherInfo,
  clientWeather,
} from './logic/weather-logic';
import { getLocation } from './logic/location-logic';
import { searchLocation, setMyLocation } from './logic/search-logic';
import { editElementText } from './dom-logic/edit-dom-element';
import { setCurrentWeather, setForecastWeather } from './dom-logic/set-dom';

runWeather();

const searchLocationBtn = document.querySelector('#searchLocationBtn');
searchLocationBtn.addEventListener('click', searchLocation);

const myLocationBtn = document.querySelector('#myLocationBtn');
myLocationBtn.addEventListener('click', setMyLocation);
