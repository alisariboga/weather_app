import React from "react";


//Ayri 2 tane  london ve Losangeles icin  CurrentWeatherComp a gerek yok tek bir tane yeterli zaten  losAngelesCurrentWeather ve londonCurrentWeather proplarini pass ederek farkilastiriyorsun
const CurrentWeatherComp = ({ currentWeather }) => {
    if (!currentWeather || !currentWeather.time) {
        return <p>Loading current weather…</p>;
    }

    const { time, temperature_2m: temp } = currentWeather;

    // const clockOnly = new Date(time).toLocaleTimeString("en-GB", {
    //     hour: "2-digit",
    //     minute: "2-digit",
    // });

    return (

        <>{temp}°C</>
    );
}

export default CurrentWeatherComp; 