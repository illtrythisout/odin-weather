export { setCurrentWeather, setForecastWeather };
import { editElementText, editElementAttribute } from './edit-dom-element';
import { clientWeather } from '../logic/weather-logic';

import clearDayIcon from '../images/weather-icons/clear-day.svg';
import clearNightIcon from '../images/weather-icons/clear-night.svg';
import cloudyIcon from '../images/weather-icons/cloudy.svg';
import fogIcon from '../images/weather-icons/fog.svg';
import partlyCloudyDayIcon from '../images/weather-icons/partly-cloudy-day.svg';
import partlyCloudyNightIcon from '../images/weather-icons/partly-cloudy-night.svg';
import rainIcon from '../images/weather-icons/rain.svg';
import snowIcon from '../images/weather-icons/snow.svg';
import windIcon from '../images/weather-icons/wind.svg';

const iconMap = {
  'clear-day': clearDayIcon,
  'clear-night': clearNightIcon,
  cloudy: cloudyIcon,
  fog: fogIcon,
  'partly-cloudy-day': partlyCloudyDayIcon,
  'partly-cloudy-night': partlyCloudyNightIcon,
  rain: rainIcon,
  snow: snowIcon,
  wind: windIcon,
};

function setCurrentWeather() {
  editElementText(document, '.current.date', clientWeather.today.date);
  editElementText(document, '.current.temp', clientWeather.today.temp + '°C');

  editElementAttribute(
    document,
    '.current.icon',
    'src',
    iconMap[clientWeather.today.icon]
  );

  editElementText(
    document,
    '.current.condition',
    clientWeather.today.condition
  );
}

function setForecastWeather() {
  const forecastRows = document.querySelectorAll('.forecastRow');

  clientWeather.forecast.forEach((obj, index) => {
    const row = forecastRows[index];
    console.log(row);

    editElementText(row, '.date', obj.date);
    editElementAttribute(row, '.icon', 'src', iconMap[obj.icon]);
    editElementText(row, '.temp', obj.temp + '°C');
  });
}
