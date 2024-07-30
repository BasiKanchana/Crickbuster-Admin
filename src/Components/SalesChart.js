// src/SalesChart.js
import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import './SalesChart.css'; // Make sure to import the CSS file

const SalesChart = () => {
  const [timeframe, setTimeframe] = useState("allTime");

  const data = {
    allTime: [
      { year: "2014", directBooking: 300, package: 200 },
      { year: "2015", directBooking: 350, package: 250 },
      { year: "2016", directBooking: 200, package: 450 },
      { year: "2017", directBooking: 400, package: 300 },
      { year: "2018", directBooking: 500, package: 350 },
      { year: "2019", directBooking: 450, package: 400 },
      { year: "2020", directBooking: 400, package: 300 },
      { year: "2021", directBooking: 350, package: 350 },
      { year: "2022", directBooking: 400, package: 400 },
    ],
    thisYear: [{ year: "2022", directBooking: 400, package: 400 }],
    thisWeek: [{ year: "Week 1", directBooking: 100, package: 150 }],
    today: [{ year: "Today", directBooking: 50, package: 70 }],
  };

  const options = {
    chart: {
      type: "areaspline",
    },
    title: {
      text: "Sales Statistics",
    },
    xAxis: {
      categories: data[timeframe].map((d) => d.year),
    },
    yAxis: {
      title: {
        text: "Sales",
      },
      min: 0,
      max: 600,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Direct booking",
        data: data[timeframe].map((d) => d.directBooking),
        color: "blue",
        fillOpacity: 0.3,
        marker: {
          enabled: true,
        },
      },
      {
        name: "Package",
        data: data[timeframe].map((d) => d.package),
        color: "magenta",
        fillOpacity: 0.3,
        marker: {
          enabled: true,
        },
      },
    ],
    plotOptions: {
      areaspline: {
        marker: {
          enabled: false,
        },
        fillOpacity: 0.3,
        tension: 0.4,
      },
    },
  };

  return (
    <div className="card">
      <div className="card-header">
        <h5>Sales Statistics</h5>
      </div>
      <div className="card-body chart-container">
        <div className="sales-stats-tabs">
          <button 
            className={`button ${timeframe === "allTime" ? "active" : ""}`}
            onClick={() => setTimeframe("allTime")}
          >
            All time
          </button>
          <button
            className={`button ${timeframe === "thisYear" ? "active" : ""}`}
            onClick={() => setTimeframe("thisYear")}
          >
            This year
          </button>
          <button
            className={`button ${timeframe === "thisWeek" ? "active" : ""}`}
            onClick={() => setTimeframe("thisWeek")}
          >
            This week
          </button>
          <button
            className={`button ${timeframe === "today" ? "active" : ""}`}
            onClick={() => setTimeframe("today")}
          >
            Today
          </button>
        </div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default SalesChart;
