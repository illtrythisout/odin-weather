export { setClientInfo };

// TEMPORARY
import { weatherData } from './weather-data';
// TEMPORARY

let currentWeather = {
  date: '',
  temp: '',
  weatherDescription: '',
};

async function setClientInfo(location) {
  const data = getWeather(location);

  clientLocationInfo.location;
}

async function getWeather(location) {
  // const link =
  //   'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' +
  //   location +
  //   '?key=PXYVXC7BCTT2L6QWWQRGU4AG5';
  // const response = await fetch(link);
  // const data = await response.json();

  // TEMPORARY
  const data = weatherData;
  // TEMPORARY

  return data;
}
