import React from "react";
import "./GlobalCases.css";
import { Bar } from "react-chartjs-2";

function GlobalCases({ global }) {
  let data;

  // check global props if empty
  if (global) {
    data = {
      labels: ["Cases", "Recovered", "Deaths"],
      datasets: [
        {
          label: "Global Case",
          data: [
            global.TotalConfirmed,
            global.TotalRecovered,
            global.TotalDeaths,
          ],
          backgroundColor: ["orange", "green", "crimson"],
        },
        {
          label: "Case Today",
          data: [global.NewConfirmed, global.NewRecovered, global.NewDeaths],
          backgroundColor: ["orange", "green", "crimson"],
        },
      ],
      options: {},
    };
  }

  console.log(global);
  return (
    <div className="globalCases panel">{global && <Bar data={data} />}</div>
  );
}

export default GlobalCases;
