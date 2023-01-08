import React from "react";
import "./carcards.css";
import { MdOutlineLoop } from "react-icons/md";
import car1 from "../../assets/car1.svg";
import car2 from "../../assets/car2.svg";
import car3 from "../../assets/car3.svg";
import { AiOutlineSetting } from "react-icons/ai";
import { RiRepeatFill } from "react-icons/ri";
import { SlEnergy } from "react-icons/sl";
import { BsCurrencyDollar } from "react-icons/bs";

function Carcards() {
  return (
    <div className="card_container container">
      <div className="cars_cards">
        <div className="car_card">
          <div className="car_text">
            <MdOutlineLoop />
            <h3>64% Recommend</h3>
          </div>
          <img src={car1} />
          <h2>Mini Cooper</h2>
          <div className="car_stats">
            <div className="carS">
              <span>
                <RiRepeatFill /> 132K{" "}
              </span>
              <AiOutlineSetting />
              <SlEnergy />
            </div>
            <div className="carH">
              <span><BsCurrencyDollar />32/h</span>
            </div>
          </div>
        </div>

        <div className="car_card">
          <div className="car_text">
            <MdOutlineLoop />
            <h3>64% Recommend</h3>
          </div>
          <img src={car2} />
          <h2>Mini Cooper</h2>
          <div className="car_stats">
            <div className="carS">
              <span>
                <RiRepeatFill /> 132K{" "}
              </span>
              <AiOutlineSetting />
              <SlEnergy />
            </div>
            <div className="carH">
              <span><BsCurrencyDollar />32/h</span>
            </div>
          </div>
        </div>

        <div className="car_card">
          <div className="car_text">
            <MdOutlineLoop />
            <h3>64% Recommend</h3>
          </div>
          <img src={car3} />
          <h2>Mini Cooper</h2>
          <div className="car_stats">
            <div className="carS">
              <span>
                <RiRepeatFill /> 132K{" "}
              </span>
              <AiOutlineSetting />
              <SlEnergy />
            </div>
            <div className="carH">
              <span><BsCurrencyDollar />32/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carcards;
