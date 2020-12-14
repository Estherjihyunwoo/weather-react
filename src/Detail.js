import React from "react";
import "./styles.css";

export default function Detail() {
  return (
    <div className="detail">
      <div className="row">
        <div className="col-3 col-sm-3" id="feels">
          <span>Feels Like C</span>
        </div>

        <div className="col-3 col-sm-3" id="low">
          <span>Low temperature C</span>
        </div>

        <div className="col-3 col-sm-3" id="wind">
          <span role="img" aria-label="Humidity icon">
            🌬Wind mph
          </span>
        </div>

        <div className="col-3 col-sm-3" id="humidity">
          <span role="img" aria-label="Humidity icon">
            💧Humidity %
          </span>
        </div>
      </div>
    </div>
  );
}
