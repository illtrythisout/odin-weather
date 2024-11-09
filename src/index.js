import './styles.css';
import { getWeather, setClientInfo } from './logic/location-logic';

console.log(await getWeather('koln'));

await setClientInfo('cologne');
