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
import {FiSettings} from "react-icons/fi"
import {BiLogOut} from "react-icons/bi"

function Sidebar() {
  return (
    <section id="sidebar">
      <div className="sidebar_container container">
        <div className="top">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="content">
          <div className="sidebar_list">
            <ul className="list_items">
              <li className="list_item">
                <RxDashboard /> Dashboard
              </li>
              <li className="list_item">
                <HiOutlineUserCircle /> Assets
              </li>
              <li className="list_item">
                <RiCarLine /> Booking
              </li>
              <li className="list_item">
                <BiShoppingBag /> Sell Cars
              </li>
              <li className="list_item">
                <BsHandbag /> Buy Cars
              </li>
              <li className="list_item">
                <RiScissors2Line /> Services
              </li>
              <li className="list_item">
                <CiCalendar /> Calender
              </li>
              <li className="list_item">
                <TbMessage /> Messages
              </li>
            </ul>
          </div>
          <div className="bottom">
            <ul className="list_items">
              <li className="list_item">
                <FiSettings /> Settings
              </li>
              <li className="list_item">
                <BiLogOut /> Log out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
