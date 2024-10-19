import { useEffect, useState } from "react";
import Inputs from "./components/Inputs";
import TempDetails from "./components/TempDetails";
import TimePlace from "./components/TimePlace";
import Navbar from "./components/Navbar";
import WeatherData from "./services/WeatherData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Background } from "./services/Background";

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {
  const [query, setQuery] = useState({ q: "allahabad" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [threshold, setThreshold] = useState(25);
  const [cityName, setCityName] = useState("");

  const getWeather = async () => {
    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalize(cityName)}`);
    setCityName(cityName);

    await WeatherData({ ...query, units }).then((data) => {
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
      setWeather(data);

      if (data.temp > threshold) {
        toast.warn(`Temperature exceeded threshold! in ${cityName}`);
      }
    });
  };

  useEffect(() => {
    getWeather();
    const intervalId = setInterval(() => {
      getWeather();
    }, 5*60*1000);
    
    return () => clearInterval(intervalId);
  }, [query, units]);

  const containerStyle = () => {
    if (!weather) return "bg-white/20";
    return weather.temp <= threshold ? "bg-white/20" : "bg-red-900/70";
  };

  return (
    <div 
      className="min-h-screen p-4 sm:p-8 md:p-12 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Background({weather:weather})})` }}
    >
      <div className="w-full max-w-4xl rounded-2xl shadow-2xl">
        <div className={`${containerStyle()} backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8`}>
          <div className="space-y-6">
            <Navbar setQuery={setQuery} />
            <Inputs 
              setQuery={setQuery} 
              setUnits={setUnits} 
              setThreshold={setThreshold} 
            />

            {weather && (
              <div className="space-y-8">
                <TimePlace weather={weather} />           
                <TempDetails weather={weather} units={units} />
              </div>
            )}
          </div>

        </div>
      </div>
        <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ zIndex: 9999 }}
       />
    </div>
  );
};

export default App;