import React from "react";
import { formatLocalTime } from "../api/weather";
function TimeLoc({ weather: { timezone, current } }) {
  const { dt, name, country } = current;
  return (
    <div className="flex flex-col justify-around items-center ">
      <div className="my-4">
        <p className="text-white font-extralight text-xl ">
          {formatLocalTime(dt, timezone)}
        </p>
      </div>
      <div className="my-3">
        <p className="text-white font-bold text-3xl ">{`${name} | ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeLoc;
