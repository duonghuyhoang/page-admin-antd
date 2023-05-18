import React from "react";
import { Bar } from "react-chartjs-2";
import "./Revenue.css";
import { Chart, LinearScale, CategoryScale, BarElement } from "chart.js";
import { DarkModeContext } from "./../../../App";
import { useContext } from "react";
Chart.register(LinearScale);
Chart.register(CategoryScale);
Chart.register(BarElement);

const data = {
  labels: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ],
  datasets: [
    {
      label: "Doanh thu (triệu đồng)",
      data: [20, 30, 40, 45, 35, 25, 40, 50, 45, 42, 50, 60],
      backgroundColor: "rgb(255,99,132)",
      borderColor: "rgba(255,99,132)",
      borderWidth: 1,
    },
  ],
};

function ColumnChart() {
  const { darkMode } = useContext(DarkModeContext);
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: darkMode ? "white" : "#787878",
        },
        grid: {
          color: darkMode ? "#5f5f62" : "#e5e5e5",
        },
      },
      x: {
        ticks: {
          color: darkMode ? "white" : "#787878",
        },
        grid: {
          color: darkMode ? "#5f5f62" : "#e5e5e5",
        },
      },
    },
  };
  return (
    <div className='column-chart'>
      <h3
        className={`title-column-chart  ${
          darkMode ? "title-column-chart-dark" : ""
        } `}
      >
        Doanh thu hàng tháng trong năm
      </h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default ColumnChart;
