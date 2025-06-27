import { useGetLosAngelesDailyWeather } from "../hooks/LosAngelesDailyWeather";
import LosAngelesDailyWeatherComp from "../components/LosAngelesDailyWeatherComp";
import { useNavigate } from "react-router-dom";
import styles from "./styles/LosAngeles16DaysWeather.module.css";

const LosAngeles16DaysWeather = () => {
  const { losAngelesDailyWeather } = useGetLosAngelesDailyWeather();
  const navigate = useNavigate();
  // Function to navigate to the home page

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <div>
      <button className={styles["toggle-btn"]} onClick={goToHome}>
        Go to Home Page
      </button>
      {
        <LosAngelesDailyWeatherComp
          losAngelesWeather={losAngelesDailyWeather}
        />
      }
    </div>
  );
};

export default LosAngeles16DaysWeather;
