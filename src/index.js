import './styles.css';
import { setClientWeatherInfo, clientWeather } from './logic/weather-logic';

console.log(clientWeather);
await setClientWeatherInfo('cologne').then(() => {
  console.log(clientWeather);
});
