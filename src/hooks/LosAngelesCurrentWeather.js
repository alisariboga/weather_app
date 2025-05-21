import axios from "axios";
import { useEffect, useState } from "react";

export const useGetLosAngelesCurrentWeather = () => {
    const [losAngelesCurrentWeather, setLosAngelesCurrentWeather] = useState()
    useEffect(() => {
        if (!losAngelesCurrentWeather) {
            axios
                .get(
                    "https://api.open-meteo.com/v1/forecast?latitude=41.0138&longitude=28.9497&current=temperature_2m&timezone=America%2FLos_Angeles"
                )
                .then(function (response) {
                    console.log("losAngeles current response data", response.data.current)
                    setLosAngelesCurrentWeather(response.data.current)
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                });
        }
    }, []);
    return { losAngelesCurrentWeather };
};