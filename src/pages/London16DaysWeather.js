import { useGetLondonDailyWeather } from "../hooks/LondonDailyWeather";
import LondonDailyWeatherComp from "../components/LondonDailyWeatherComp";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './styles/London16DaysWeather.module.css';


function London16DaysWeather() {

    const { londonDailyWeather } = useGetLondonDailyWeather();
    const [showLondon] = useState(true);

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');

    }
    return (

        <div>
            <button className={styles["toggle-btn"]} onClick={goToHome}>Go to Home Page</button>
            {showLondon && <LondonDailyWeatherComp weather={londonDailyWeather} />}
        </div>
    );

}


export default London16DaysWeather;