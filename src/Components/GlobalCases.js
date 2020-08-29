import React from "react";
import "./GlobalCases.css";
import { Bar } from "react-chartjs-2";

function GlobalCases({ global }) {
  let data;

  // check global props if empty
  // if (global) {
  //   data = {
  //     labels: ["Cases", "Recovered", "Deaths"],
  //     datasets: [
  //       {
  //         label: "Global Case",
  //         data: [
  //           global.TotalConfirmed,
  //           global.TotalRecovered,
  //           global.TotalDeaths,
  //         ],
  //         backgroundColor: ["orange", "green", "crimson"],
  //       },
  //       {
  //         label: "Case Today",
  //         data: [global.NewConfirmed, global.NewRecovered, global.NewDeaths],
  //         backgroundColor: ["orange", "green", "crimson"],
  //       },
  //     ],
  //     options: {},
  //   };
  // }

  return (
    <div className="globalCases panel">
      {global && (
        <div className="globalCases__results">
          <span className="globalCases__category">
            <label>Total cases</label>
            <p>{global.TotalConfirmed}</p>
          </span>
          <span className="globalCases__category">
            <label>Recovered</label>
            <p>{global.TotalRecovered}</p>
          </span>
          <span className="globalCases__category">
            <label>Deaths</label>
            <p>{global.TotalDeaths}</p>
          </span>
        </div>
      )}
    </div>
  );
}

export default GlobalCases;
