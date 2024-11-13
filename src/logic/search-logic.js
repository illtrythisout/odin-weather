import { runWeather } from './weather-logic';

export { searchLocation, setMyLocation };

const locationInput = document.querySelector('#locationInput');

function searchLocation() {
  runWeather(locationInput.value);
  locationInput.value = '';
}

function setMyLocation() {
  runWeather();
}
