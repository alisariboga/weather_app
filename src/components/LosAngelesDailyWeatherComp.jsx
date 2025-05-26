

export default function LosAngelesDailyWeatherComp(losAngelesWeatherData) {
    // Removed unused losAngelesWeather destructuring

    if (!losAngelesWeatherData.losAngelesWeather || !losAngelesWeatherData.losAngelesWeather.time) {
        return <p>Loading</p>;
    }

    const { time: dates,
        temperature_2m_max: maxTemps,
        temperature_2m_min: minTemps,
    } = losAngelesWeatherData.losAngelesWeather;

    const formatClock = isoString =>
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
            <h3>
                Los Angeles Daily Maximum Temperature, Minimum Temperature
            </h3>
            <ul>
                {dates.map((date, i) => (
                    <li key={date}>
                        {date} – <strong>Max Temp:</strong> {maxTemps[i]} °C –{" "}
                        <strong>Min Temp:</strong> {minTemps[i]} °C {" "}
                    </li>
                ))}
            </ul>
        </div>
    );
}



