import React from "react";
import { geticonURL } from "../api/weather";

function Forecastdetail(props) {
  const {
    data: { icon, temp, title }
  } = props;

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-sm font-light">{title}</p>
      <img src={geticonURL(icon)} alt="" className="w-12 my-1" />
      <p className="font-medium">{temp.toFixed()}&deg;</p>
    </div>
  );
}

export default Forecastdetail;
