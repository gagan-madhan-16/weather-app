import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Inputs = ({ setQuery, setUnits, setThreshold }) => {
  const [city, setCity] = useState("");
  const [thre,setThre]=useState();

  const searchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const thresholdClick=()=>{
    setThreshold(thre);
  }

  const locationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };



  return (
    <>
      <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text"
            placeholder="search by city..."
            className="text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
          />

          <BiSearch
            size={30}
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={searchClick}
          />
          <BiCurrentLocation
            size={30}
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={locationClick}
          />
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
          <button
            className="text-2xl font-medium transition ease-out hover:scale-125"
            onClick={() => setUnits("metric")}
          >
            °C
          </button>
          <p className="text-2xl font-medium mx-1">|</p>

          <button
            className="text-2xl font-medium transition ease-out hover:scale-125"
            onClick={() => setUnits("")}
          >
            °k
          </button>

        </div>
      </div>
      <div className="flex justify-center items-center\">
        <input
          value={thre}
          onChange={(e) => setThre(e.currentTarget.value)}
          type="text"
          placeholder="ThreShold temp..."
          className="text-gray-500 text-xl font-light p-2 w-26 shadow-xl capitalize focus:outline-none placeholder:lowercase"
        />
        <button
          onClick={thresholdClick}
        className="mx-8 white text-black bg-white rounded-full w-40 h-10 transition ease-out   hover:scale-125"> Set ThreShold </button>
      </div>
    </>
  );
};

export default Inputs;
