import { useState, useEffect } from "react";

import TopMenu from "./components/TopMenu";
import Search from "./components/Search";
import TimeLoc from "./components/TimeLoc";
import Tempdetail from "./components/Tempdetail";
import Forecast from "./components/Forecast";
import { getweatherdata } from "./api/weather";

function App() {
  const [city, setCity] = useState("Delhi");
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await getweatherdata({ city, units });

      setWeather(data);
    })();
  }, [city, units]);
  return (
    <div className="mx-auto max-w-screen-md  mt-4 py-5 px-5 md:px-32 h-fit bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400">
      <TopMenu setCity={setCity} />
      <Search setCity={setCity} setUnits={setUnits} units={units} />
      {weather && (
        <div>
          <TimeLoc weather={weather} />
          <Tempdetail weather={weather} />
          <Forecast title="hourly" weather={weather.hourly} />
          <Forecast title="daily" weather={weather.daily} />
        </div>
      )}
    </div>
  );
}

export default App;
