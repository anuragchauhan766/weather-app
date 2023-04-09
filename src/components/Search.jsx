import { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";

function Search(props) {
  const [input, setInput] = useState("");
  const { setCity, setUnits, units } = props;
  const handlesearch = () => {
    if (input !== "") setCity(input);
  };
  const handleunitchange = (e) => {
    const newUnit = e.target.name;
    if (units !== newUnit) setUnits(newUnit);
  };
  return (
    <div className="flex flex-col md:flex-row justify-center items-center  my-4 md:my-6">
      <div className="flex justify-center items-center w-full md:w-3/4 space-x-4">
        <input
          placeholder="search city... "
          className="text-xl p-2 bg-white w-full font-light shadow-xl focus:outline-none capitalize rounded-md"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handlesearch}
        />
        {/* <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        /> */}
      </div>
      <div className="flex justify-center items-center w-1/2 my-6 md:m-0  text-3xl md:text-xl">
        <button
          type="button"
          name="metric"
          className=" text-white font-light transition ease-out hover:scale-125"
          onClick={() => setUnits("metric")}
        >
          &deg;C
        </button>
        <p className=" text-white mx-1">|</p>
        <button
          type="button"
          name="imperial"
          className=" text-white font-light transition ease-out hover:scale-125"
          onClick={handleunitchange}
        >
          &deg;F
        </button>
      </div>
    </div>
  );
}

export default Search;
