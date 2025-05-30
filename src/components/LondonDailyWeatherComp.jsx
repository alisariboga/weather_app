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
    for (let i = 0; i < dates.length; i++) {
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
            <div className={styles.weatherGrid} >
            {dates.map((date, i) => (
                <div key={date} className={styles.weatherCard}>
                    <ul>
                        <strong> <ul id={styles.date} >{date}</ul></strong>
                        <ul ><strong>Max Temp: </strong> {maxTemps[i]} °C </ul>
                        <ul> <strong>Min Temp:</strong> {minTemps[i]} °C</ul>
                    </ul>

                </div>
            ))}
        </div>
        </div >
    );
}



