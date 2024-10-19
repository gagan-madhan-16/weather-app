import React from "react";

const TimePlace = ({
  weather: { LocalTime, name, country },
}) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-xl font-extralight">{LocalTime}</p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default TimePlace;
