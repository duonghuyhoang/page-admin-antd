import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "./Subcription.css";
import { DarkModeContext } from "./../../../App";
import { useContext } from "react";
import {
  Chart,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(LinearScale);
Chart.register(CategoryScale);
Chart.register(PointElement);
Chart.register(LineElement);

const data = {
  labels: [
    "Ngày 1",
    "Ngày 2",
    "Ngày 3",
    "Ngày 4",
    "Ngày 5",
    "Ngày 6",
    "Ngày 7",
  ],
  datasets: [
    {
      label: "Số lượng người đăng ký",
      data: [12, 19, 3, 5, 2, 3, 10],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

function LineChart() {
  const chartRef = useRef(null);
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
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className='line-chart'>
      <h3
        className={`title-line-chart ${
          darkMode ? "title-line-chart-dark" : ""
        } `}
      >
        Số lượng người đăng ký trong 7 ngày gần nhất
      </h3>
      <Line
        data={data}
        options={options}
        ref={(chart) => {
          chartRef.current = chart;
        }}
      />
    </div>
  );
}

export default LineChart;
