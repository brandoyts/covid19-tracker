import React, { useState, useEffect } from "react";
import "./App.css";
import GlobalCases from "./components/GlobalCases";
import SelectedCases from "./components/SelectedCases";
import axios from "axios";

function App() {
  const [globalCase, setGlobalCase] = useState(null);

  useEffect(() => {
    let data;
    function fetchData() {
      axios
        .get("https://api.covid19api.com/stats")
        .then((res) => console.log(res));
    }

    fetchData();
    // console.log(data);
  });

  return (
    <div className="App">
      <h1>tracker</h1>
    </div>
  );
}

export default App;
