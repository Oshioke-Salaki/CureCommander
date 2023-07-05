import { useState } from "react";
import Chart from "react-apexcharts";

function GenderChart() {
  const [chartOptions, setChartOptions] = useState({
    series: [500, 600],

    options: {
      chart: { type: "donut" },
      //   legend: { show: false },
      dataLabels: { enabled: false },
      tooltip: { enabled: false },
      fill: { colors: ["#2591FC", "#FF5046"] },
      //   states: {
      //     hover: { filter: { type: "lighten", value: 0.5 } },
      //     active: { filter: { type: "none", value: 0 } },
      //   },
      labels: ["Female", "Male"],
      stroke: { width: 0 },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "60%",
            labels: {
              show: true,
              name: { show: false },
              //   total: {
              //     show: true,
              //     showAlways: true,
              //     formatter: function (w) {
              //       const totals = w.globals.seriesTotals;

              //       const result = totals.reduce((a, b) => a + b, 0);

              //       return (result / 1000).toFixed(3);
              //     },
              //   },
            },
          },
        },
      },
      legend: {
        position: "right",
        markers: {
          fillColors: ["#2591FC", "#FF5046"],
          radius: 50,
        },
        fontFamily: "Inter",
      },
      //   grid: {
      //     padding: {
      //       left: "2rem",
      //       right: 0,
      //     },
      //   },
    },
  });
  return (
    <Chart
      options={chartOptions.options}
      series={chartOptions.series}
      type="donut"
      width="100%"
      height="100%"
    />
  );
}

export default GenderChart;
