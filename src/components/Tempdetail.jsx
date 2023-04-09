/* eslint-disable camelcase */
import React from "react";
import {
  UilTemperature,
  UilArrowUp,
  UilArrowDown,
  UilTear,
  UilWind,
  UilSun,
  UilSunset
} from "@iconscout/react-unicons";
import { geticonURL, formatLocalTime } from "../api/weather";

function Tempdetail({ weather: { current, timezone } }) {
  const { detail, temp, temp_max, temp_min, sunrise, sunset, speed, humidity, feels_like, icon } =
    current;
  return (
    <div>
      {/* first row */}
      <div className="flex justify-center items-center my-6">
        <p className="text-white font-regular text-md">{detail}</p>
      </div>

      {/* second row */}
      <div className="flex justify-between items-center my-3 text-white">
        <img src={geticonURL(icon)} alt="" className="w-20" />
        <p className="text-5xl">{temp.toFixed()}&deg;</p>

        <div className="flex flex-col justify-around items-center space-y-2">
          <div className="flex justify-center items-center text-sm font-light">
            <UilTemperature size={18} className=" mr-1" />
            Real Feel:
            <span className="font-medium ml-1">{feels_like.toFixed()}&deg;</span>
          </div>
          <div className="flex justify-center items-center text-sm font-light">
            <UilTear size={18} className=" mr-1" />
            Humidity:
            <span className="font-medium ml-1">{humidity.toFixed()}%</span>
          </div>
          <div className="flex justify-center items-center text-sm font-light">
            <UilWind size={18} className=" mr-1" />
            Wind:
            <span className="font-medium ml-1">{speed.toFixed()} km/h</span>
          </div>
        </div>
      </div>

      {/* third row */}
      <div className="flex justify-content items-center my-6 text-white text-sm space-x-2">
        <UilSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">{formatLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">{formatLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowUp />
        <p className="font-light">
          High: <span className="font-medium ml-1">{temp_max.toFixed()}&deg;</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowDown />
        <p className="font-light">
          Low: <span className="font-medium ml-1">{temp_min.toFixed()}&deg;</span>
        </p>
      </div>
    </div>
  );
}

export default Tempdetail;
