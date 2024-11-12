import './styles.css';
import { setClientWeatherInfo, clientWeather } from './logic/weather-logic';

console.log(clientWeather);
await setClientWeatherInfo('sao paolo').then(() => {
  console.log(clientWeather);
});
