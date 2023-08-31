import { createContext ,useState} from "react";

export const Weather = createContext();


export const WeatherContext = ({children})=>{
    const [currLocationData, setcurrLocationData] = useState({});
    const [isLoading,setLoading] = useState(true);
    
    return(
      <Weather.Provider value={{currLocationData, setcurrLocationData,isLoading,setLoading}}>
        {children}
      </Weather.Provider>
    )
}