import React from "react";

export default function LosAngelesCurrentWeatherComp({ losAngelesCurrentWeather }) {
    if (!losAngelesCurrentWeather || !losAngelesCurrentWeather.time) {
        return <p>Loading current weather…</p>;
    }

    const { time, temperature_2m: temp } = losAngelesCurrentWeather;

    const clockOnly = new Date(time).toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (

        <>{temp}°C</>
    );
}
