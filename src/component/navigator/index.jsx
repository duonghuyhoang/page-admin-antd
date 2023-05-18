import { useNavigate } from "react-router-dom";
import "./Navigator.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  SettingFilled,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

function getItem(label, key, icon, to) {
  return {
    key,
    icon,
    label,
    to,
  };
}

function Navigator() {
  const location = useLocation();
  const locationPart = location.pathname;
  const navigate = useNavigate();
  useEffect(() => {
    if (locationPart === "/") {
      navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  const items = [
    getItem("Dashboard", "1", <PieChartOutlined />, "/dashboard"),
    getItem("Posts Management", "2", <DesktopOutlined />, "/post-management"),
    getItem("Settings", "3", <SettingFilled />, "/settings"),
  ];
  const handleItemClick = (item) => {
    if (item.to) {
      navigate(item.to);
    }
  };
  return (
    <div className='wrapper-nav'>
      <span className='title-header'>Admin</span>

      <div className='nav'>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode='inline'
          theme='dark'
        >
          {items.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              onClick={() => handleItemClick(item)}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </div>
  );
}

export default Navigator;
