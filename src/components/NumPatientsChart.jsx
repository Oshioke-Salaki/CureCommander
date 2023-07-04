import { useState } from "react";
import Chart from "react-apexcharts";
function NumPatientsChart() {
  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        name: "Male",
        data: [44, 55, 57, 56, 61, 58, 63],
      },
      {
        name: "Female",
        data: [76, 85, 101, 98, 87, 105, 91],
      },
    ],
    options: {
      chart: {
        type: "bar",
        // height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      fontFamily: "Inter",
      dataLabels: {
        enabled: false,
      },

      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      //   yaxis: {
      //     title: {
      //       text: '$ (thousands)'
      //     }
      //   },
      fill: {
        colors: ["#2591FC", "#FF5046"],
      },
      legend: {
        position: "top",
        markers: {
          fillColors: ["#2591FC", "#FF5046"],
          radius: 50,
        },
        fontFamily: "Inter",
      },
    },
  });

  return (
    <Chart
      options={chartOptions.options}
      series={chartOptions.series}
      type="bar"
      width="100%"
      height="250"
    />
  );
}

export default NumPatientsChart;
