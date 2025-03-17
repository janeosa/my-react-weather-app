import React from "react";
import "./WeatherForecast.css";
export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              width="58"
              height="58"
              alt="insert description"
              className="WeatherForecast-icon"
            />
          </div>{" "}
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
