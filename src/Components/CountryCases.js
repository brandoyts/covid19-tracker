import React from "react";
import { Bar } from "react-chartjs-2";
import "./CountryCases.css";

function CountryCase({ country }) {
  const data = {
    labels: ["Cases", "Recovered", "Deaths"],
    datasets: [
      {
        label: "Cases",
        data: [country.cases, country.recovered, country.deaths],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="countryCases panel">
      <div className="countryCases__map">map</div>

      <Bar
        data={data}
        width={100}
        height={30}
        options={{ maintainAspectRatio: true }}
      />
    </div>
  );
}

export default CountryCase;
