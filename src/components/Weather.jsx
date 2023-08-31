import React,{useContext} from "react";
import "../assets/css/weather.css";
import { BiMap, BiTimeFive } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { Weather} from "../context/weatherContext";
import Loader from "./loader";
import WeatherInfo from './WeatherInfo';
import { formatDateIntoString } from "../utils/dateFormat";
import {formatTimeIntoLocalTime} from '../utils/timeFormat';




const WeatherView = () => {

  const { currLocationData,isLoading } = useContext(Weather);

  return (
    <>
    {
      isLoading 
      ?
      <Loader/>
      :
      <>
      <div className="weather-wrapper">
      <div className="Card">
        <div className="Card-wrapper">
          <p className="place-wrapper">
            <BiMap className="map-icon" />
            <span className="city">{currLocationData?.location?.name||''}</span>
            <span className="country">,{currLocationData?.location?.country||''}</span>
          </p>
        </div>
        <div className="image-container">
          <p className="temparature">
            <span className="temparature-score">{currLocationData?.current?.temperature||''}</span>
            <span className="temparature-o-sign">o</span>
            <span className="temparature-sign-c">C</span>
          </p>
        </div>
        <div className="date-time-wrapper">
          <p>
            <SlCalender className="calender-icon"/>
            <span className="date">{currLocationData?.location?.localtime
            ?formatDateIntoString(currLocationData?.location?.localtime) : ''}</span>
          </p>
          <p>
            <BiTimeFive className="time-icon"/>
            <span className="time">{currLocationData?.location?.localtime?
            formatTimeIntoLocalTime(currLocationData?.location?.localtime) : ''}</span>
          </p>
        </div>
      </div>
    </div>
    <WeatherInfo/>
    </>
    }
   </>
  );
};

export default WeatherView;
