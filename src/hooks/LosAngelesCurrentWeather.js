import axios from "axios";
import { useEffect, useState } from "react";

export const useGetLosAngelesCurrentWeather = () => {
    const [losAngelesCurrentWeather, setLosAngelesCurrentWeather] = useState()
    useEffect(() => {
        if (!losAngelesCurrentWeather) {
            axios
                .get(
                    "https://api.open-meteo.com/v1/forecast?latitude=34.05&longitude=118.25&current=temperature_2m&timezone=America%2FLos_Angeles"
                )
                .then(function (response) {
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