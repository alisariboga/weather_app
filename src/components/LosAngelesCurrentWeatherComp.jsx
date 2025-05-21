import React from "react";

export default function LosAngelesCurrentWeatherComp({ losAngelesCurrentWeather }) {
    console.log("losAngelesCurrentWeather : ", losAngelesCurrentWeather)
    if (!losAngelesCurrentWeather || !losAngelesCurrentWeather.time) {
        return <p>Loading current weather…</p>;
    }

    const { time, temperature_2m: temp } = losAngelesCurrentWeather;

    const clockOnly = new Date(time).toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <div>
            <h3>Los Angeles</h3>
            <p>
                <strong>{temp}°C</strong>
            </p>
        </div>
    );
}
