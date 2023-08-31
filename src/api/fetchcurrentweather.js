import axios from "axios";
const url = 'http://api.weatherstack.com/current';

export const fetchCurrentWeatherData = async (currentCity)=>{
    const {data} = await axios.get(url,{
      params:{access_key:'929b7cc7f5b84708ab3c056ddc43b56f',
      query: `${currentCity}`
    }
    });
    return data;
}