import React from "react";
import "./GlobalCase.css";
import { Line } from "react-chartjs-2";

function GlobalCase({ global, history }) {
  console.log(history);
  return (
    <div className="globalCase panel">
      <div className="globalCase__cases">
        <span className="globalCase__label">
          <label>Total cases</label>
          <p>{global.cases}</p>
        </span>
        <span className="globalCase__label">
          <label>Recovered</label>
          <p>{global.recovered}</p>
        </span>
        <span className="globalCase__label">
          <label>Deaths</label>
          <p>{global.deaths}</p>
        </span>
      </div>

      {global != undefined && history !== undefined && (
        <Line
          data={global.cases}
          width={100}
          height={50}
          options={{ maintainAspectRatio: false }}
        />
      )}
    </div>
  );
}

export default GlobalCase;
