import React, { useState, useEffect } from "react";
import "./App.css";
import GlobalCase from "./Components/GlobalCase";
import CountryCase from "./Components/CountryCase";
import axios from "axios";

function App() {
  const [globalCase, setGlobalCase] = useState({});
  const [globalCaseHistory, setGlobalCaseHistory] = useState([]);

  const [countryCase, setCountryCase] = useState({});
  const [countryCaseHistory, setCountryCaseHistory] = useState([]);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    fetchData("https://corona.lmao.ninja/v2/all?yesterday", setGlobalCase);
    fetchData("https://covid19-api.org/api/timeline", setGlobalCaseHistory);
    fetchData(
      "https://corona.lmao.ninja/v2/countries/ph?yesterday=true&strict=true&query",
      setCountryCase
    );
  }, []);

  return (
    <div className={`app ${theme}`}>
      <div className="app__container">
        <GlobalCase global={globalCase} history={globalCaseHistory} />
        <CountryCase country={countryCase} />
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

export default App;
