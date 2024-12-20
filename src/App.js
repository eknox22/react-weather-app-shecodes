import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bristol" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/eknox22/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Emily Knox-Clifton
          </a>
          {""} and is {""}
          <a
            href="https://github.com/eknox22/React-Weather-Application"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on GitHub{" "}
          </a>
          and {""}
          <a
            href="https://merry-gnome-6832f9.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
