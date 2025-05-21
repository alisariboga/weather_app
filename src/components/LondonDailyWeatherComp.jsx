import React from "react";

export default function LondonDailyWeatherComp(weatherData) {
    console.log("Daily Weather Data", weatherData.weather);
    if (!weatherData.weather || !weatherData.weather.time) {
        return <p>Loading</p>;
    }

    const { time: dates,
        temperature_2m_max: maxTemps,
        temperature_2m_min: minTemps,
        sunrise: sunriseTime,
        sunset: sunsetTime
    } = weatherData.weather;

    const formatClock = isoString => //chatgpt
        new Date(isoString).toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        });


    const sunrises = sunriseTime.map(formatClock); //chatgpt
    const sunsets = sunsetTime.map(formatClock);


    const items = [];
    for (let i = 0; i < dates.length; i++) { //neresi oldugunu da datayla cek!
        const date = dates[i];
        const maxTemp = maxTemps[i];
        const minTemp = minTemps[i];
        const sunriseData = sunrises[i];
        const sunsetData = sunsets[i];


        items.push(
            <div key={i}>
                <span>{date}</span>
                <span>{maxTemp + "°C"}</span>
                <span>{minTemp + "°C"}</span>
                <span>{sunriseData}</span>
                <span>{sunsetData}</span>
            </div>
        );
    }


    return (
        <div>
            <h3>
                London Daily Maximum Temperature, Minimum Temperature, Sunrise &amp; Sunset
            </h3>
            <ul>
                {dates.map((date, i) => (
                    <li key={date}>
                        {date} – <strong>Max Temp:</strong> {maxTemps[i]}°C –{" "}
                        <strong>Min Temp:</strong> {minTemps[i]}°C –{" "}
                        <strong>Sunrise:</strong> {sunrises[i]} –{" "}
                        <strong>Sunset:</strong> {sunsets[i]}
                    </li>
                ))}
            </ul>
        </div>
    );
}



