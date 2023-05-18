import ColumnChart from "./ColumnChart";
import Dashboard from "..";
import { Statistic, Card } from "antd";
import { DarkModeContext } from "./../../../App";
import { useContext } from "react";
import {
  CalendarOutlined,
  DollarCircleOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

function Revenue() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`wrapper-revenue ${darkMode ? "wrapper-revenue-dark" : ""} `}
    >
      <Dashboard />
      <ColumnChart />

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

export default Revenue;
