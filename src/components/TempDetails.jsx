import { FaThermometerEmpty as Thermometer } from "react-icons/fa";
import { BiSolidDropletHalf as Droplet } from "react-icons/bi";
import { FiWind as Wind } from "react-icons/fi";
import { GiSunrise as Sunrise, GiSunset as Sunset } from "react-icons/gi";
import { MdKeyboardArrowUp as ArrowUp, MdKeyboardArrowDown as ArrowDown, MdKeyboardArrowRight as ArrowRight } from "react-icons/md";

const TempDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
  units,
}) => {
  const vertical = [
    {
      id: 1,
      Icon: Thermometer,
      title: "Feels Like",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: Droplet,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: Wind,
      title: "Wind",
      value: `${speed.toFixed()} ${units === "metric" ? "km/h" : "m/s"}`,
    },
  ];
  const horizontal = [
    {
      id: 1,
      Icon: Sunrise,
      title: "Sunrise",
      value: sunrise,
    },
    {
      id: 2,
      Icon: Sunset,
      title: "Sunset",
      value: sunset,
    },
    {
      id: 3,
      Icon: ArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 4,
      Icon: ArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}°`,
    },
    {
      id:5,
      Icon:ArrowRight,
      title:"Average",
      value:`${((temp_min+temp_max)/2).toFixed()}`
    }
  ];
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between py-3">
        <img src={icon} alt="weather icon" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>

        <div className="flex flex-col space-y-3 items-start">
          {vertical.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className="flex font-light text-sm items-center justify-center"
            >
              <Icon size={18} className="mr-1" />
              {`${title}: `}
              <span className="font-medium ml-1">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
        {horizontal.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex flex-row items-center">
            <Icon size={30} />
            <p className="font-light ml-1">
              {`${title}: `}
              <span className="font-medium ml-1">{value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempDetails;
