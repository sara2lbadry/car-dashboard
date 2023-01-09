import React from "react";
import "./carcards.css";
import { MdOutlineLoop } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { RiRepeatFill } from "react-icons/ri";
import { SlEnergy } from "react-icons/sl";
import { BsCurrencyDollar } from "react-icons/bs";
import { carCards } from "../../data";

function Carcards() {
  console.log(carCards)
  return (
    <div className="card_container container">
      <div className="cars_cards">
        {carCards.map(({id, title, img, backgroundColor, type, rate, money}) => {
          return (
            <>
              <div
                key={id}
                className="car_card"
                style={{ backgroundColor:  backgroundColor }}
              >
                <div className="car_text">
                  <MdOutlineLoop />
                  <h3>{title}</h3>
                </div>
                <img src={img} />
                <h2>{type}</h2>
                <div className="car_stats">
                  <div className="carS">
                    <RiRepeatFill className="Ricon" />
                    <span>{rate}</span>
                    <AiOutlineSetting />
                    <SlEnergy />
                  </div>
                  <div className="carH">
                    <BsCurrencyDollar />
                    <span>{money}</span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Carcards;
