import React from "react";

import Forecastdetail from "./Forecastdetail";

function Forecast(props) {
  const {
    title,

    weather
  } = props;
  return (
    <div>
      <div className="flex justify-content items-center mt-6">
        <p className="text-white font-medium uppercase">{title} Forecast</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row justify-between items-center text-white">
        {weather.map((data, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Forecastdetail data={data} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Forecast;
