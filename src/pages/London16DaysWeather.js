import { useGetLondonDailyWeather } from "../hooks/LondonDailyWeather";
import LondonDailyWeatherComp from "../components/LondonDailyWeatherComp";
import LondonWeatherDetails from "./LondonWeatherDetails";
import React, { useState } from "react";


function London16DaysWeather() {

    const { londonDailyWeather } = useGetLondonDailyWeather();
    const [showLondon] = useState(true);


    return (
        
        <div>
            <LondonWeatherDetails />
            {showLondon && <LondonDailyWeatherComp weather={londonDailyWeather} />}
        </div>
    )
};


export default London16DaysWeather;