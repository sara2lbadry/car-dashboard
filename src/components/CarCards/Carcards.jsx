import React from "react";
import "./carcards.css";
import { MdOutlineLoop } from "react-icons/md";
import car1 from "../../assets/car1.svg";
import car2 from "../../assets/carr.svg";
import car3 from "../../assets/car3.svg";
import { AiOutlineSetting } from "react-icons/ai";
import { RiRepeatFill } from "react-icons/ri";
import { SlEnergy } from "react-icons/sl";
import { BsCurrencyDollar } from "react-icons/bs";

function Carcards() {
  return (
    <div className="card_container container">
      <div className="cars_cards">
        <div
          className="car_card"
          style={{ backgroundColor: `var(--tertiary-secondary1)` }}
        >
          <div className="car_text">
            <MdOutlineLoop />
            <h3>64% Recommend</h3>
          </div>
          <img src={car1} />
          <h2>Mini Cooper</h2>
          <div className="car_stats">
            <div className="carS">
              <RiRepeatFill className="Ricon" />
              <span>132K </span>
              <AiOutlineSetting />
              <SlEnergy />
            </div>
            <div className="carH">
              <BsCurrencyDollar />
              <span>32/h</span>
            </div>
          </div>
        </div>

        <div
          className="car_card"
          style={{ backgroundColor: `var(--tertiary-secondary2)` }}
        >
          <div className="car_text">
            <MdOutlineLoop />
            <h3>74% Recommend</h3>
          </div>
          <img src={car2} />
          <h2>Porsche 911 Carrera</h2>
          <div className="car_stats">
            <div className="carS">
              <RiRepeatFill className="Ricon" />
              <span>130K </span>
              <AiOutlineSetting />
              <SlEnergy />
            </div>
            <div className="carH">
              <BsCurrencyDollar />
              <span>28/h</span>
            </div>
          </div>
        </div>

        <div
          className="car_card"
          style={{ backgroundColor: `var(--tertiary-secondary3)` }}
        >
          <div className="car_text">
            <MdOutlineLoop />
            <h3>74% Recommend</h3>
          </div>
          <img src={car3} />
          <h2>Porsche 911 Carrera</h2>
          <div className="car_stats">
            <div className="carS">
              <RiRepeatFill className="Ricon" />
              <span>130K </span>
              <AiOutlineSetting />
              <SlEnergy />
            </div>
            <div className="carH">
              <BsCurrencyDollar />
              <span>28/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carcards;
