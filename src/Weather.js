import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const weatherRef = ref(db, "weather");
    const unsubscribe = onValue(weatherRef, (snapshot) => {
      const data = snapshot.val();
      setWeatherData(data);
      setLoading(false);
    });

    // Cleanup the listener when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Weather Monitoring System</h1>
      {loading ? (
        <p>Loading weather data...</p>
      ) : weatherData ? (
        <div>
          <h3>Temperature: {weatherData.temperature}°C</h3>
          <h3>Humidity: {weatherData.humidity}%</h3>
        </div>
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
};

export default Weather;
