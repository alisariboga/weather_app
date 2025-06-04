import axios from "axios";
import { useEffect, useState } from "react";

export const useGetLondonDailyWeather = () => {
  const [londonDailyWeather, setLondonWeather] = useState(undefined)
  useEffect(() => {
    if (!londonDailyWeather) {
      axios
        .get(
          "https://api.open-meteo.com/v1/forecast?latitude=51.50&longitude=-0.12&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon&forecast_days=16"
        )
        .then(function (response) {
          setLondonWeather(response.data.daily)
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
  return { londonDailyWeather };
};