import React, { useState } from "react";
import { useGetLondonDailyWeather } from "./hooks/LondonDailyWeather";
import { useGetLondonCurrentWeather } from "./hooks/LondonCurrentWeather";
import { useGetLosAngelesCurrentWeather } from "./hooks/LosAngelesCurrentWeather";
import { useGetLosAngelesDailyWeather } from "./hooks/LosAngelesDailyWeather";
import LondonDailyWeatherComp from "./components/LondonDailyWeatherComp";
import LondonCurrentWeatherComp from "./components/LondonCurrentWeatherComp";
import LosAngelesCurrentWeatherComp from "./components/LosAngelesCurrentWeatherComp";
import LosAngelesDailyWeatherComp from "./components/LosAngelesDailyWeatherComp";

function App() {
  const [showLondon, setShowLondon] = useState(true);
  const [showLosAngeles, setShowLosAngeles] = useState(true);

  const { londonDailyWeather } = useGetLondonDailyWeather();
  const { londonCurrentWeather } = useGetLondonCurrentWeather();
  const { losAngelesCurrentWeather } = useGetLosAngelesCurrentWeather();
  const { losAngelesDailyWeather } = useGetLosAngelesDailyWeather();


  return (
    <div className="App">
      <h1 className="App_Name">Weather App</h1>


      <LondonCurrentWeatherComp londonCurrentWeather={londonCurrentWeather} />
      <LosAngelesCurrentWeatherComp losAngelesCurrentWeather={losAngelesCurrentWeather} />

      <>
        <button onClick={() => setShowLondon((prev) => !prev)}>
          {showLondon ? "Hide London 16 Days Weather!" : "Show London 16 Days Weather!"}
        </button>

        {showLondon && <LondonDailyWeatherComp weather={londonDailyWeather} />}
      </>
      <></>
      <>
        <button onClick={() => setShowLosAngeles((prev) => !prev)}>
          {showLosAngeles ? "Hide LosAngeles 16 Days Weather!" : "Show LosAngeles 16 Days Weather!"}
        </button>

        {showLosAngeles && <LosAngelesDailyWeatherComp losAngelesWeather ={losAngelesDailyWeather} />}
      </>
    </div>
  );
}

export default App;
