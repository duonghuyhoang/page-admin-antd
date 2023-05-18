import LineChart from "./LineChart";
import "./Subcription.css";

import { Statistic, Card } from "antd";

import {
  CalendarOutlined,
  DollarCircleOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import Dashboard from "..";
import { DarkModeContext } from "./../../../App";
import { useContext } from "react";

function Subcription() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`wrapper-subcription ${
        darkMode ? "wrapper-subcription-dark" : ""
      } `}
    >
      <Dashboard />
      <LineChart />

      <div className='demo-card'>
        <Card className='card-body1'>
          <Statistic
            className='card-body-title1'
            title='EARNINGS (MONTHLY)'
            value={40000}
            prefix={<CalendarOutlined />}
          />
        </Card>
        <Card className='card-body2'>
          <Statistic
            className='card-body-title2'
            title='EARNINGS (ANNUAL)'
            value={215000}
            prefix={<DollarCircleOutlined />}
          />
        </Card>
        <Card className='card-body3'>
          <Statistic
            className='card-body-title3'
            title='TASKS'
            value={50}
            suffix='%'
          />
        </Card>
        <Card className='card-body4'>
          <Statistic
            className='card-body-title4'
            title='PENDING REQUESTS'
            value={18}
            prefix={<FileDoneOutlined />}
          />
        </Card>
      </div>
    </div>
  );
}

export default Subcription;
