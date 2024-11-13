import './styles.css';
import { setClientWeatherInfo, clientWeather } from './logic/weather-logic';
import { getLocation } from './logic/location-logic';

try {
  await getLocation();
  await setClientWeatherInfo(); // No parameters needed, as currentLocation is set
  console.log('Weather Data:', clientWeather);
} catch (error) {
  console.error('Error getting location or weather:', error);
}
