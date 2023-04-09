import React from "react";

function TopMenu(props) {
  const { setCity } = props;
  const citites = [
    {
      id: 1,
      title: "London"
    },
    {
      id: 2,
      title: "New York"
    },
    {
      id: 3,
      title: "Mumbai"
    },
    {
      id: 4,
      title: "Delhi"
    },
    {
      id: 5,
      title: "Kolkata"
    }
  ];
  return (
    <div className="hidden md:flex justify-around items-center">
      {citites.map((city) => (
        <button
          type="button"
          className="text-lg text-white font-medium transition ease-out hover:scale-110"
          key={city.id}
          onClick={() => setCity(city.title)}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopMenu;
