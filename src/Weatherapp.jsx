import { useState } from "react"
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]= useState({
    city: "Delhi",
    humidity: 89,
    tempMax: 31.06,
    tempMin: 31.06
    });

    let updateInfo=(info)=>{
        setWeatherInfo(info);
    }
    
    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <br /><br />
            <InfoBox weatherInfo={weatherInfo}/>
        </div>
    );
}