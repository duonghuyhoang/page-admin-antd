import React, { useState } from "react";
import { Input, DatePicker, Button } from "antd";
import "./Settings.css";
import { DarkModeContext } from "../../App";
import { useContext } from "react";

const Settings = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [bgColorText, setBgColorText] = useState("#ffffff");
  const [bgColorError, setBgColorError] = useState("");
  const [bgColorValid, setBgColorValid] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [dateError, setDateError] = useState("");
  const [showSave, setShowSave] = useState(false);
  const { RangePicker } = DatePicker;
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    const titleRegex = /[a-zA-Z0-9]/;
    if (!titleRegex.test(e.target.value)) {
      setTitleError("Title must contain at least one letter or one number");
    } else {
      setTitleError("");
    }
    setShowSave(true);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    if (!emailValue.startsWith(" ")) {
      setEmail(emailValue);
    }
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!emailRegex.test(e.target.value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
    setShowSave(true);
  };

  const handleBgColorChange = (e) => {
    setBgColor(e.target.value);
    setBgColorText(e.target.value);

    if (e.target.value) {
      setBgColorValid(true);
      setBgColorError("");
    } else if (!e.target.value) {
      setBgColorValid(false);
      setBgColorError("Please change color");
    }
    if (e.target.value) {
      const hexValue = e.target.value;
      const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      if (!hexRegex.test(hexValue)) {
        setBgColorError("Invalid hex value");
      } else {
        setBgColorError("");
      }
    }

    setShowSave(true);
  };

  const handleDateChange = (dates) => {
    if (Array.isArray(dates)) {
      const [startDate, endDate] = dates;
      setStartDate(startDate);
      setEndDate(endDate);
      setDateError("");
      setShowSave(true);
    }
  };
  const handleSave = () => {
    if (!title) {
      setTitleError("Title must contain at least one letter or one number");
    }
    if (!email) {
      setEmailError("Invalid email address");
    }
    if (!bgColorValid) {
      setBgColorError("Please change color");
    } else {
      setBgColorError("");
    }
    if (!startDate || !endDate) {
      setDateError("Please pick a date");
    }
    if (
      title &&
      email &&
      startDate &&
      endDate &&
      bgColorValid &&
      titleError === "" &&
      emailError === "" &&
      bgColorError === "" &&
      dateError === ""
    ) {
      console.log(`Title: ${title}`);
      console.log(`Email: ${email}`);
      console.log(`Background Color: ${bgColor}`);
      console.log(
        `Start Date: ${startDate ? startDate.format("DD/MM/YYYY") : ""}`
      );
      console.log(`End Date: ${endDate ? endDate.format("DD/MM/YYYY") : ""}`);
    }
  };

  return (
    <div
      className={`wrapper-setting ${darkMode ? "wrapper-setting-dark" : ""} `}
    >
      <h3
        className={`title-main-setting ${
          darkMode ? "title-main-setting-dark" : ""
        } `}
      >
        Settings
      </h3>
      <p
        className={`subtitle-main-setting ${
          darkMode ? "subtitle-main-setting-dark" : ""
        } `}
      >
        Manage your team and preferences here.
      </p>
      <span className='line-cut-setting'></span>
      <div className='nav-setting-demo'>
        <Button
          type='link'
          className={`subnav-setting-demo ${
            darkMode ? "subnav-setting-demo-dark" : ""
          } `}
        >
          My details
        </Button>
        <Button
          type='link'
          className={`subnav-setting-demo ${
            darkMode ? "subnav-setting-demo-dark" : ""
          } `}
        >
          Profile
        </Button>
        <Button
          type='link'
          className={`subnav-setting-demo ${
            darkMode ? "subnav-setting-demo-dark" : ""
          } `}
        >
          Password
        </Button>
        <Button
          type='link'
          className={`subnav-setting-demo ${
            darkMode ? "subnav-setting-demo-dark" : ""
          } `}
        >
          Team
        </Button>
        <Button
          type='link'
          className={`subnav-setting-demo ${
            darkMode ? "subnav-setting-demo-dark" : ""
          } `}
        >
          Plan
        </Button>
        <Button
          type='link'
          className={`subnav-setting-demo ${
            darkMode ? "subnav-setting-demo-dark" : ""
          } `}
        >
          Billing
        </Button>
        <Button
          type='link'
          className={`subnav-setting-demo ${
            darkMode ? "subnav-setting-demo-dark" : ""
          } `}
        >
          Email
        </Button>
        <Button
          type='link'
          className={`subnav-setting-demo ${
            darkMode ? "subnav-setting-demo-dark" : ""
          } `}
        >
          Notifications
        </Button>
        <Button
          type='link'
          className={`subnav-setting-demo ${
            darkMode ? "subnav-setting-demo-dark" : ""
          } `}
        >
          Integrations
        </Button>
        <Button
          type='link'
          className={`subnav-setting-demo ${
            darkMode ? "subnav-setting-demo-dark" : ""
          } `}
        >
          API
        </Button>
      </div>
      <div className='cut-line-setting-demo'></div>
      <div className='form-setting'>
        <div
          className={`title-setting ${darkMode ? "title-setting-dark" : ""} `}
        >
          <label
            className={`lable-title ${darkMode ? "lable-title-dark" : ""} `}
          >
            Title
          </label>
          <Input value={title} onChange={handleTitleChange} />
          {titleError && <div className='title-error'>{titleError}</div>}
        </div>
        <div
          className={`email-setting ${darkMode ? "email-setting-dark" : ""} `}
        >
          <label
            className={`lable-email ${darkMode ? "lable-email-dark" : ""} `}
          >
            Email
          </label>
          <Input value={email} onChange={handleEmailChange} />
          {emailError && <div className='email-error'>{emailError}</div>}
        </div>
        <div className={`bg-setting ${darkMode ? "bg-setting-dark" : ""} `}>
          <label className={`lable-bg ${darkMode ? "lable-bg-dark" : ""} `}>
            Background
          </label>
          <Input
            type='color'
            className='bg-input-color'
            value={bgColor}
            onChange={handleBgColorChange}
          />
          <Input
            type='text'
            className='bg-input-color-text'
            value={bgColorText}
            onChange={handleBgColorChange}
          />
          {bgColorError && (
            <div className='bgColor-error-error'>{bgColorError}</div>
          )}
        </div>
        <div className={`date-setting ${darkMode ? "date-setting-dark" : ""} `}>
          <label className={`lable-date ${darkMode ? "lable-date-dark" : ""} `}>
            Active Date
          </label>
          <RangePicker className='date-input' onChange={handleDateChange} />
          {dateError && <div className='date-error'>{dateError}</div>}
        </div>
        <div className='save-setting'>
          {showSave && (
            <Button type='primary' onClick={handleSave}>
              Save changes
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
