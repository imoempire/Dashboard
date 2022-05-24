import React, { useState } from "react";
import "./SideBar.css";
import logo from "../imgs/logo.png";

import { SidebarData } from "./Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";

const SideBar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="SideBar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      {/* menu */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span
                style={{
                  color: selected === index ? "#006021" : "black",
                  fontSize: 15,
                }}
              >
                {item.heading}
              </span>
            </div>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt /> Logout
        </div>
      </div>
    </div>
  );
};

export default SideBar;
