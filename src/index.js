import './styles.css';
import { setClientWeatherInfo, clientWeather } from './logic/weather-logic';
import { getLocation } from './logic/location-logic';
import { editElementText } from './dom-logic/edit-dom-element';
import { setCurrentWeather, setForecastWeather } from './dom-logic/set-dom';

(async function runWeather() {
  try {
    await getLocation();
    await setClientWeatherInfo();
    console.log('Weather Data:', clientWeather);
    setCurrentWeather();
    setForecastWeather();
  } catch (error) {
    console.error('Error getting location or weather:', error);
  }
})();
