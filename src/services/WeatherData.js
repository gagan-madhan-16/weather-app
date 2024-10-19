import { DateTime } from "luxon";
import {API_KEY,BASE_URL} from '../config.js';

const fetchWeather = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const iconurl = (icon) =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`;

const toLocalTime = (
  secs,
  offset,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

const Location = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { main: details, icon } = weather[0];
  const LocalTime = toLocalTime(dt, timezone);

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    country,
    sunrise: toLocalTime(sunrise, timezone, "hh:mm a"),
    sunset: toLocalTime(sunset, timezone, "hh:mm a"),
    speed,
    details,
    icon: iconurl(icon),
    LocalTime,
    dt,
    timezone,
    lat,
    lon,
  };
};


const WeatherData = async (searchParams) => {
  const currWeather = await fetchWeather(
    "weather",
    searchParams
  ).then(Location);

  const { dt, lat, lon, timezone } = currWeather;


  return { ...currWeather };
};

export default WeatherData;
