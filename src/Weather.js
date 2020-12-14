import React from "react";
import "./styles.css";
import Forecast from "./Forecast.js";
import Temperature from "./Temperature.js";
import Detail from "./Detail.js";
import Footer from "./Footer.js";

export default function Weather() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <form id="city-form"> </form>

          <div className="search">
            <form className="mb-3">
              <div className="row">
                <div className="col-6">
                  <input
                    type="search"
                    placeholder="📍 Type a city ..."
                    className="form-control"
                    autofocus="on"
                    autoComplete="off"
                  />
                </div>

                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="form-control btn btn-primary shadow-sm"
                  />
                </div>

                <div className="col-3" id="current">
                  <input
                    type="submit"
                    value="current location"
                    className="btn btn-success shadow-sm"
                    id="button2"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="Temperature">
            <br />

            <Temperature />
          </div>

          <br />
          <Detail />
          <br />
        </div>
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
