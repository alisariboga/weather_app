import React from "react";


export default function LondonCurrentWeatherComp({ londonCurrentWeather }) {
    if (!londonCurrentWeather || !londonCurrentWeather.time) {
        return <p>Loading current weather…</p>;
    }

    // API’den gelen tek obje
    const { time, temperature_2m: temp } = londonCurrentWeather;


    const clockOnly = new Date(time).toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <>{temp}°C</>
    );
}
