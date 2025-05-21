import { useGetLondonDailyWeather } from "./hooks/LondonDailyWeather";
import { useGetLondonCurrentWeather } from "./hooks/LondonCurrentWeather";
import { useGetLosAngelesCurrentWeather } from "./hooks/LosAngelesCurrentWeather";
import LondonDailyWeatherComp from "./components/LondonDailyWeatherComp";
import LondonCurrentWeatherComp from "./components/LondonCurrentWeatherComp";
import LosAngelesCurrentWeatherComp from "./components/LosAngelesCurrentWeatherComp";

function App() {
  const { londonDailyWeather } = useGetLondonDailyWeather();
  const { londonCurrentWeather } = useGetLondonCurrentWeather();
  const { losAngelesCurrentWeather } = useGetLosAngelesCurrentWeather();


  return (
    <div>
      <LondonDailyWeatherComp weather={londonDailyWeather} />
      <LondonCurrentWeatherComp londonCurrentWeather={londonCurrentWeather} />
      <LosAngelesCurrentWeatherComp losAngelesCurrentWeather ={losAngelesCurrentWeather} />
    </div>
  );
}

export default App;
