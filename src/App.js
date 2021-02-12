import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";

function App() {
 
  const [city, setCity] = React.useState("");
  const [cityWeather, setCityWeather] = React.useState({});
  const fetchCityWeather = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log("Result is bhhjbhjbhbh:", result);
        setCityWeather(result);
      });
  };
  return (
    <>
      <CityInput
        city={city}
        setCity={setCity}
        fetchCityWeather={fetchCityWeather}
      />
      {/* Use city weather data to ok show it on the screen */}
      <CityWeather
        cityWeather = {cityWeather}
      />
    </>
  );
}

export default App;
