import React, { useState, useEffect } from "react";
import "./App.css";
import GlobalCase from "./Components/GlobalCase";
import CountryCase from "./Components/CountryCase";
import axios from "axios";

function App() {
  const [globalCases, setGlobalCases] = useState({});
  const [globalHistory, setGlobalHistory] = useState({});

  const [countryCases, setCountryCases] = useState({});
  const [countryHistory, setCountryHistory] = useState([]);
  const [countryGeolocation, setCountryGeolocation] = useState();

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    fetchData("https://covid19-api.org/api/timeline", setGlobalCases);
    fetchData(
      `https://covid19-api.org/api/timeline/:country=ph`,
      setCountryCases
    );
  }, []);

  return (
    <div className={`app ${theme}`}>
      <div className="app__container">
        {/* <GlobalCase cases={globalHistory[globalCase.length - 1]} /> */}
        {/* <CountryCase /> */}
      </div>
    </div>
  );
}

function fetchData(url, callback) {
  axios
    .get(url)
    .then((res) => callback(res.data))
    .catch((err) => console.log(err));
}

function getHistory(data) {}

export default App;
