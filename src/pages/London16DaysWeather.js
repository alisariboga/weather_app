import { useGetLondonDailyWeather } from "../hooks/LondonDailyWeather";
import LondonDailyWeatherComp from "../components/LondonDailyWeatherComp";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/London16DaysWeather.module.css";

const London16DaysWeather = () => {
  const { londonDailyWeather } = useGetLondonDailyWeather();

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };
  return (
    <div>
      <button className={styles["toggle-btn"]} onClick={goToHome}>
        Go to Home Page
      </button>
      {<LondonDailyWeatherComp weather={londonDailyWeather} />}
    </div>
  );
};

export default London16DaysWeather;
