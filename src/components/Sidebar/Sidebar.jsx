import React from "react";
import "./sidebar.css";
import logo from "../../assets/Theme=on.svg";
import { RxDashboard } from "react-icons/rx";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiCarLine } from "react-icons/ri";
import { BsHandbag } from "react-icons/bs";
import { RiScissors2Line } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";
import { TbMessage } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import {  NavLink } from "react-router-dom";

function Sidebar() {
  // const [active, setActive] = useState("/");

  return (
    <section id="sidebar">
      <div className="sidebar_container ">
        <div className="top">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="content">
          <div className="sidebar_list">
            <ul className="list_items">
              <li className="list_item">
                <NavLink
                  className="link"
                  to="/dashboard"
                  activeClassName="active"
                  // onClick={() => setActive("/dashboard")}
                  // className={active === "/dashboard" ? "active " : ""}
                >
                  <RxDashboard className="list_icon" />
                  <span> Dashboard</span>
                </NavLink>
              </li>
              <li className="list_item">
                <HiOutlineUserCircle className="list_icon" />{" "}
                <span> Assets</span>
              </li>
              <li className="list_item">
                <NavLink
                  className="link"
                  to="/booking"
                  activeClassName="active"
                  // onClick={() => setActive("/booking")}
                  // className={active === "/booking" ? "active" : ""}
                >
                  <RiCarLine className="list_icon" />
                  <span> Booking</span>
                </NavLink>
              </li>
              <li className="list_item">
                <BiShoppingBag className="list_icon" /> <span> Sell Cars</span>
              </li>
              <li className="list_item">
                <BsHandbag className="list_icon" /> <span> Buy Cars</span>
              </li>
              <li className="list_item">
                <RiScissors2Line className="list_icon" /> <span> Services</span>
              </li>
              <li className="list_item">
                <CiCalendar className="list_icon" /> <span> Calender</span>
              </li>
              <li className="list_item">
                <TbMessage className="list_icon" /> <span> Messages</span>
              </li>
            </ul>
          </div>
          <div className="bottom">
            <ul className="list_items">
              <li className="list_item">
                <FiSettings className="list_icon" /> <span> Settings</span>
              </li>
              <li className="list_item">
                <BiLogOut className="list_icon" /> <span> Log out</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
