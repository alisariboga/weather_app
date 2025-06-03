import axios from "axios";
import { useEffect, useState } from "react";

export const useGetLondonCurrentWeather = () => {
    const [londonCurrentWeather, setLondonCurrentWeather] = useState()
    useEffect(() => {
        if (!londonCurrentWeather) {
            axios
                .get(
                    "https://api.open-meteo.com/v1/forecast?latitude=51.50&longitude=-0.12&current=temperature_2m&timezone=Europe%2FLondon&forecast_days=16"
                )
                .then(function (response) {
                    setLondonCurrentWeather(response.data.current)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
    }, []);

    
    return { londonCurrentWeather };
};