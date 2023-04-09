import React from "react";
import Forecastdetail from "./Forecastdetail";
import { data } from "autoprefixer";
function Forecast(props) {
  const {
    title,

    weather,
  } = props;
  return (
    <div>
      <div className="flex justify-content items-center mt-6">
        <p className="text-white font-medium uppercase">{title} Forecast</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row justify-between items-center text-white">
        {weather.map((data, index) => (
          <Forecastdetail data={data} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Forecast;
