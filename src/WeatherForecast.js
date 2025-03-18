import React from "react";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "10tc88b5de8d7eoa39c8f2ea84faadb2";
  let city = props.data.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
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
