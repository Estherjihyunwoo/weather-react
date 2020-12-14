import React from "react";
import "./styles.css";

export default function Temperature() {
  let weatherData = {
    city: "Los Angeles",
    temperature: 30,
    date: "Monday 5:00",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };

  return (
    <div className="temperature">
      <h1 id="city">{weatherData.city}</h1>

      <p>
        {" "}
        Last updated ⏰ {weatherData.date}
        <span id="date"></span>
      </p>
      <div className="row">
        <div className="col-6">
          <div className="Weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt="weathericon"
              className="float-right"
            />
            <div className="float-right">
              <h4>{weatherData.temperature}</h4>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
