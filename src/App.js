import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/janeosa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jane Ighodaro
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/janeosa/my-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://my-react-weather-app-by-jane-osa.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
