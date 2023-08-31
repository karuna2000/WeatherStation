import axios from "axios";
const url = 'http://api.ipstack.com/';
const access_key ='fcfe9a435717fbda428d8e12b4063d6b';


const fetchLocation = async (ipAddress)=>{
   const {data} = await axios.get(url+`${ipAddress}`,{
    params:{access_key:access_key}
   })

   return data;
}

export const fetchLocationByIP = async ()=>{
    const {data} = await axios.get(url+'check',{
      params:{access_key:access_key
    }
    });
    const Data = await fetchLocation(data.ip);
    return Data;
}
  