import { useState, useEffect,useContext } from "react";
import toast from 'react-hot-toast';
import { Weather } from "../context/weatherContext";
import { fetchCurrentWeatherData } from "../api/fetchcurrentweather";

export const useFetchWeather = () => {

  const [currentCity, setCurrentCity] = useState();
  const{setcurrLocationData,setLoading} = useContext(Weather);

  async function fetchdata() {
    const data = await fetchCurrentWeatherData(currentCity);
      setcurrLocationData(data);
      setLoading(false);
  }

  useEffect(() => {
    fetchdata();
  },[currentCity]);


  return {
    setCurrentCity,
    fetchdata,
    currentCity
  };
};
