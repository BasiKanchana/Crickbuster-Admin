import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const cardData = [
  { id: 1, number: "813", title: "T20 2020 Cricket" },
  { id: 2, number: "814", title: "T20 2020 Cricket" },
  { id: 3, number: "815", title: "T20 2020 Cricket" },
  { id: 4, number: "816", title: "T20 2020 Cricket" },
  { id: 5, number: "813", title: "T20 2020 Cricket" },
  { id: 6, number: "813", title: "T20 2020 Cricket" },
];

const PackagesOnLive = () => {
  const percentage = 64;
  const color = "#742CDF";
  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      height: "85%",  
      margin: [10, 0, 10, 0], 
      events: {
        render: function () {
          const chart = this;
          const text = `${percentage}%`;
          const x = chart.plotLeft + chart.plotWidth / 1.9;
          const y = chart.plotTop + chart.plotHeight / 2.2 + 10;
          if (chart.customText) {
            chart.customText.destroy();
          }
          chart.customText = chart.renderer
            .text(text, x, y)
            .css({
              fontSize: "13px",  
              fontWeight: "bold",
              color: "#333",
            })
            .attr({
              align: "center",
            })
            .add();
        },
      },
    },
    title: {
      text: "",
    },
    tooltip: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        innerSize: "80%",
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [
      {
        data: [
          {
            y: percentage,
            color: color,
          },
          {
            y: 100 - percentage,
            color: "#e6e6e6",
          },
        ],
      },
    ],
  };

  return (
    // Main Card Div
    <div className="card">
      <div>
        <div className="card-header">
          <h5>Packages On Live</h5>
        </div>
        <div className="Packages-cards chart-container">
          {cardData.map((card) => (
            //  sub cards div
            <div key={card.id} className="col-lg-6">
              <div className="card m-1 p-2"> {/* Adjusted margin and padding for smaller cards */}
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="">
                    <p>{card.number}</p>
                    <h6 className="fw-bold">{card.title}</h6>
                  </div>
                  <div className="col-lg-6 p-0"> 
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={options}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesOnLive;
