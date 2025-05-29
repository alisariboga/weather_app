import React from "react";
import styles from "../components/styles/LondonDailyWeatherComp.module.css";

export default function LondonDailyWeatherComp(weatherData) {
    if (!weatherData.weather || !weatherData.weather.time) {
        return <p>Loading</p>;
    }

    const { time: dates,
        temperature_2m_max: maxTemps,
        temperature_2m_min: minTemps,
    } = weatherData.weather;

    const formatClock = isoString => //chatgpt
        new Date(isoString).toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        });




    const items = [];
    for (let i = 0; i < dates.length; i++) { //neresi oldugunu da datayla cek!
        const date = dates[i];
        const maxTemp = maxTemps[i];
        const minTemp = minTemps[i];


        items.push(
            <div key={i}>
                <span>{date}</span>
                <span>{maxTemp + " °C"}</span>
                <span>{minTemp + " °C"}</span>
            </div>
        );
    }


    return (
        <div>
            <h3>London Daily Maximum Temperature, Minimum Temperature</h3>
            <div className={styles.weatherGrid}>
                {dates.map((date, i) => (
                    <div key={date} className={styles.weatherCard}>
                        {date} – <strong >Max Temp:</strong> {maxTemps[i]} °C –{" "}
                        <strong>Min Temp:</strong> {minTemps[i]} °C {" "}
                    </div>
                ))}
            </div>
        </div>
    );
}



