import React from "react";
import { formatLocalTime } from "../api/weather";

function TimeLoc({ weather: { timezone, current } }) {
  const { dt, name, country } = current;
  const [date, time] = formatLocalTime(dt, timezone).split("|");
  return (
    <div className="flex flex-col justify-around items-center ">
      <div className="my-4 flex  flex-col md:flex-row text-white font-extralight text-xl space-y-2 md:space-y-0 ">
        <p>{date}</p>
        <span className="hidden md:inline mx-2"> | </span>
        <p>{time}</p>
      </div>
      <div className="my-3">
        <p className="text-white font-bold text-3xl ">{`${name} | ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeLoc;
