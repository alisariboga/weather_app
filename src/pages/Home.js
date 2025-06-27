import { useGetLondonCurrentWeather } from "../hooks/LondonCurrentWeather";
import { useGetLosAngelesCurrentWeather } from "../hooks/LosAngelesCurrentWeather";
import CurrentWeatherComp from "../components/CurrentWeatherComp";
import LosAngeles16DaysWeather from "./LosAngeles16DaysWeather";
import London16DaysWeather from "./London16DaysWeather";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import styles from "./styles/Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const { londonCurrentWeather } = useGetLondonCurrentWeather();
  const { losAngelesCurrentWeather } = useGetLosAngelesCurrentWeather();

  const goToLondon16DaysWeather = () => {
    navigate("/London16DaysWeather");
  };

  const goToLosAngeles16DaysWeather = () => {
    navigate("/LosAngeles16DaysWeather");
  };

  const londonCurrentWeatherVar = (
    <CurrentWeatherComp currentWeather={londonCurrentWeather} />
  );
  const losAngelesCurrentWeatherVar = (
    <CurrentWeatherComp currentWeather={losAngelesCurrentWeather} />
  );

  return (
    <div className={styles.Home}>
      <h1 className={styles["home-name"]}>Weather App</h1>

      <button
        className={styles["toggle-btn"]}
        onClick={goToLondon16DaysWeather}
      >
        <strong>London </strong>
        <>{londonCurrentWeatherVar}</>
      </button>

      <button
        className={styles["toggle-btn"]}
        onClick={goToLosAngeles16DaysWeather}
      >
        <strong>Los Angeles </strong>
        <>{losAngelesCurrentWeatherVar}</>
      </button>

      <Routes>
        <Route path="/" element={null} />
        <Route path="/London16DaysWeather" element={<London16DaysWeather />} />
        <Route
          path="/LosAngeles16DaysWeather"
          element={<LosAngeles16DaysWeather />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default Home;
