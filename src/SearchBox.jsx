import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    const [city,setCity]= useState("");

    function handleChange(event) {
        setCity(event.target.value);
    }
    async function handleSubmit(event) {
        event.preventDefault();
        console.log(city);
        let responseData=await getCoordinates(city);
        let latitude=responseData[0].latitude;
        let longitude=responseData[0].longitude;
        let newinfo=await getWeatherInfo(latitude,longitude);
        updateInfo(newinfo);
        setCity("");
    }


    const getCoordinates = async (city) => {
        const getCoordinates_apiKey = "bEqJrKhT8b+HYLK/c342fw==44UFHKYAE0GOx8ww";

        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/geocoding?city=${city}`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': getCoordinates_apiKey
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching coordinates:', error);
        }
     };

     const getWeatherInfo=async (latitude,longitude)=>{
        const getWeatherInfo_apiKey="f11e8acc46315632e30e34841296aca6";
        const getWeatherInfo_URL="https://api.openweathermap.org/data/2.5/weather";
        
        let response=await fetch(
            `${getWeatherInfo_URL}?lat=${latitude}&lon=${longitude}&appid=${getWeatherInfo_apiKey}&units=metric`
        );
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result={
            city:jsonResponse.name,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
        }
        console.log(result);
        return result;
     }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Enter City" variant="outlined" value={city} onChange={handleChange}/>
                <br />
                <br />
                <Button variant="contained" type='submit'>Search</Button>  
            </form>
        </div>
    )
}