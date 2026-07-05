

import React, { useEffect, useState } from "react";

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
   
        const response = await new Promise((resolve, reject) => {
          setTimeout(() => {
            const randomError = true;

            if (randomError) {
              reject(new Error("500 Server Error"));
            } else {
              resolve({
                city: "Tbilisi",
                temperature: "24°C",
              });
            }
          }, 2000);
        });

        setWeather(response);
      } catch (err) {
        
        setError(err);
      }
    };

    fetchWeather();
  }, []);

 
  if (error) {
    throw error;
  }

  if (!weather) {
    return <h2>იტვირთება...</h2>;
  }

  return (
    <div>
      <h1>ქალაქი: {weather.city}</h1>
      <h2>ტემპერატურა: {weather.temperature}</h2>
    </div>
  );
}

export default WeatherWidget;