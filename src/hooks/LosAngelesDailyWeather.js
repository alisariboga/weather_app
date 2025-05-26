import axios from "axios";
import { useEffect, useState } from "react";

export const useGetLosAngelesDailyWeather = () => {
    const [losAngelesDailyWeather, setLosAngelesWeather] = useState(undefined)
    useEffect(() => {
        if (!losAngelesDailyWeather) {
            axios
                .get(
                    "https://api.open-meteo.com/v1/forecast?latitude=34.05&longitude=118.2426&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&forecast_days=16"
                )
                .then(function (response) {
                    setLosAngelesWeather(response.data.daily)
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                });
        }
    }, []);
    return { losAngelesDailyWeather };
};