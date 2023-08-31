import React, { useContext, useEffect, useState } from "react";
import "../assets/css/search.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { useFetchWeather } from "../hooks/fetchWeatherDetail";
import { fetchLocationByIP } from "../api/fetchUserLocationByIp";
import { Weather } from "../context/weatherContext";

const Search = () => {
  const [city, setCity] = useState("");

  const { setCurrentCity } = useFetchWeather();
  const{setLoading} = useContext(Weather);

  const handleChange = (event) => {
    const { value } = event.target;
    setCity(value);
  };

  const handleClick = () => {
    setCurrentCity(city);
    setCity("");
    setLoading(true);
  };

  useEffect(()=>{
    async function getCurrentCity(){
      const data = await fetchLocationByIP();
      setCurrentCity(data.city); 
    }
    getCurrentCity();
  },[])

  return (
    <div className="Search-Wrapper">
      <div className="Search-Inner-Wrapper">
        <input
          type="text"
          name="city"
          id="city"
          className="input-field"
          placeholder="Enter city name to fetch weather report"
          value={city}
          onChange={handleChange}
        />
        <button
          className="btn-search"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          <BiSearchAlt2 className="search-icon" />
        </button>
      </div>
    </div>
  );
};

export default Search;
