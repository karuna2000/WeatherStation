import React, {useContext } from "react";
import "../assets/css/weatherinfo.css";
import { Weather } from "../context/weatherContext";

const WeatherInfo = () => {
  const { currLocationData } = useContext(Weather);

  return (
    <div className="weatherInfo-wrapper">
      <div className="weatherInfo-Inner-Wrapper">
        <div className="Info-Card">
          <span>Humidity</span>
          <p>
            <span>{currLocationData?.current?.humidity|| ''}</span>
          </p>
        </div>
        <div className="Info-Card">
          <span>Wind Speed</span>
          <p>
            <span>{currLocationData?.current?.wind_speed || ''}</span>
            <span>km</span>
          </p>
        </div>
        <div className="Info-Card">
          <span>Condition</span>
          <p>
            <span>{currLocationData?.current?.weather_descriptions||''}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
