/* eslint-disable camelcase */
import { DateTime } from "luxon";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = import.meta.env.VITE_API_OPEN_WEATHER;
const fetchdata = async (infoType, searchparams) => {
  const url = new URL(infoType, BASE_URL);
  url.search = new URLSearchParams({
    ...searchparams,
    appid: API_KEY
  });

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const formatLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local Time: 'hh:mm a") =>
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
const getcurrentWeather = async (searchparams) => {
  const data = await fetchdata("weather", searchparams);

  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    weather,
    wind: { speed },
    sys: { country, sunrise, sunset }
  } = data;
  const { main: detail, icon } = weather[0];
  return {
    lon,
    lat,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    speed,
    country,
    sunrise,
    sunset,
    detail,
    icon
  };
};
const getForcastdata = async (searchparams) => {
  const data = await fetchdata("onecall", searchparams);
  // eslint-disable-next-line prefer-const
  let { timezone, hourly, daily } = data;
  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon
    };
  });
  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp,
      icon: d.weather[0].icon
    };
  });
  return {
    timezone,
    daily,
    hourly
  };
};

export const getweatherdata = async ({ city, units = "metric" }) => {
  const current = await getcurrentWeather({ q: city, units });
  const { lon, lat } = current;
  const forcast = await getForcastdata({
    lat,
    lon,
    exclude: "current,minutly,alerts",
    units
  });
  return { current, ...forcast };
};

export const geticonURL = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`;
