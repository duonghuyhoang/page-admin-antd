import { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useContext } from "react";
import useClickOutside from "./useClickOutside";
import "./Header.css";
import { DarkModeContext } from "../../App";
import { Input } from "antd";
import { Avatar, Dropdown, Menu } from "antd";
import {
  BellOutlined,
  DownOutlined,
  MenuOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";

function Header() {
  const [showLogout, setShowLogout] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const logoutRef = useRef(null);
  const handleLogoutClick = () => {
    setShowLogout(!showLogout);
  };
  useClickOutside(logoutRef, () => setShowLogout(false));
  const location = useLocation();
  const locationPart = location.pathname;
  const navigate = useNavigate();
  useEffect(() => {
    if (locationPart === "/") {
      navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <header
        className={`wrapper-header ${darkMode ? "wrapper-header-dark" : ""} `}
      >
        <div className='content-header'>
          <Dropdown
            className='nav-mobile'
            overlay={() => (
              <Menu>
                <Menu.Item>
                  <NavLink className='nav-link-mobile' to='/dashboard'>
                    <span>Dashboard</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink className='nav-link-mobile' to='/post-management'>
                    <span>Posts Management</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink className='nav-link-mobile' to='/settings'>
                    <span>Settings</span>
                  </NavLink>
                </Menu.Item>
              </Menu>
            )}
          >
            <MenuOutlined />
          </Dropdown>

          <div className='seperate2'></div>
          <div
            className={`search-header ${darkMode ? "search-header-dark" : ""} `}
          >
            <Input
              size='large'
              placeholder='Search...'
              className={`search-input ${darkMode ? "search-input-dark" : ""} `}
              prefix={<SearchOutlined className='icon-search' />}
            />
          </div>
          <div
            className={`mode-dark-light ${
              darkMode ? "mode-dark-light-dark" : ""
            } `}
            onClick={() => setDarkMode((prev) => !prev)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              class='bi bi-circle-half'
              viewBox='0 0 16 16'
            >
              <path d='M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z' />
            </svg>
          </div>
          <BellOutlined className='icon-bell' />

          <div className={`seperate ${darkMode ? "seperate-dark" : ""} `}></div>
          <div className='icon-header'>
            <span className={`user-name ${darkMode ? "user-name-dark" : ""} `}>
              User
            </span>
            <div>
              <Dropdown
                trigger={["click"]}
                className={`log-out ${darkMode ? "log-out-dark" : ""} `}
                ref={logoutRef}
                overlay={
                  <Menu
                    className={`menu-dropdown ${
                      darkMode ? "menu-dropdown-dark" : ""
                    } `}
                  >
                    <Menu.Item className='menu-dropdown-item'>
                      <Avatar
                        size='large'
                        icon={<UserOutlined />}
                        className='icon-user-logout '
                      />
                      <span className='lable-user-logout'>User</span>
                    </Menu.Item>
                    <Menu.Item className='menu-dropdown-item'>
                      Settings & Privacy
                    </Menu.Item>
                    <Menu.Item className='menu-dropdown-item'>
                      Help & support
                    </Menu.Item>
                    <Menu.Item className='menu-dropdown-item'>
                      Display
                    </Menu.Item>
                    <Menu.Item className='menu-dropdown-item'>
                      Comment
                    </Menu.Item>
                    <Menu.Item className='menu-dropdown-item'>
                      Log out
                    </Menu.Item>
                  </Menu>
                }
              >
                <Avatar
                  size='large'
                  icon={<UserOutlined />}
                  className={`icon-user ${darkMode ? "icon-user-dark" : ""} `}
                  onClick={handleLogoutClick}
                />
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
