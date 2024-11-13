export { setClientWeatherInfo, clientWeather };
import { formatDate } from './date-formatter';
import { getLocation, currentLocation } from './location-logic';

let clientWeather = {};

async function setClientWeatherInfo(location = currentLocation) {
  let data;
  if (typeof location === 'string') {
    data = await getWeather(location);
  } else {
    location = location.latitude + ',' + location.longitude;
    data = await getWeather(location);
  }

  // set basic object for clientWeather
  clientWeather = {
    today: { date: '', temp: '', icon: '', condition: '' },
    forecast: [
      { date: '', temp: '', icon: '' },
      { date: '', temp: '', icon: '' },
      { date: '', temp: '', icon: '' },
      { date: '', temp: '', icon: '' },
      { date: '', temp: '', icon: '' },
    ],
  };

  // set today's weather
  (function setToday() {
    clientWeather.today.date = formatDate('long'); // set current weather's date to today's date
    clientWeather.today.temp = data.currentConditions.temp;
    clientWeather.today.icon = data.currentConditions.icon;
    clientWeather.today.condition = data.currentConditions.conditions;
  })();

  (function setForecast() {
    clientWeather.forecast.forEach((day, index) => {
      day.date = formatDate('short', index + 1);
      day.temp = data.days[index + 1].temp;
      day.icon = data.days[index + 1].icon;
    });
  })();
}

async function getWeather(location) {
  const link =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' +
    location +
    '?unitGroup=metric&key=PXYVXC7BCTT2L6QWWQRGU4AG5';
  const response = await fetch(link);
  const data = await response.json();

  return data;
}
