import React, { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "antd";
import "./Dashboard.css";
import { DarkModeContext } from "../../App";

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const { darkMode } = useContext(DarkModeContext);
  useEffect(() => {
    if (location.pathname === "/page-admin-antd") {
      navigate("/");
    }
    if (location.pathname === "/dashboard") {
      navigate("/dashboard/subcription");
    }
  }, [location.pathname, navigate]);

  return (
    <div
      className={`wrapper-dashboard ${
        darkMode ? "wrapper-dashboard-darkk" : ""
      } `}
    >
      <div
        className={`title-dashboard ${darkMode ? "title-dashboard-dark" : ""} `}
      >
        Overview dashboard
      </div>
      <div className='demo-btn-ground1'>
        <span>7 Days</span>
        <span>1 Month</span>
        <span>3 Month</span>
      </div>
      <div className='demo-btn-ground2'>
        <span>24 Mar 2019 - 24 Mar 2019 </span>
      </div>
      <div
        className={`nav-dashbroard ${darkMode ? "nav-dashbroard-dark" : ""} `}
      >
        <Button
          onClick={() => navigate("/dashboard/subcription")}
          type={
            location.pathname === "/dashboard/subcription" ? "primary" : "link"
          }
        >
          Subcription
        </Button>
        <Button
          onClick={() => navigate("/dashboard/revenue")}
          type={location.pathname === "/dashboard/revenue" ? "primary" : "link"}
        >
          Revenue
        </Button>
      </div>
      <div
        className={`wrapper-cut-line ${
          darkMode ? "wrapper-cut-line-dark" : ""
        } `}
      >
        <div className={`cut-line ${darkMode ? "cut-line-dark" : ""} `}></div>
      </div>
    </div>
  );
}

export default Dashboard;
