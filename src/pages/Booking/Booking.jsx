import React from "react";
import "./booking.css";
import { carsModels } from "../../data";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiRepeatLine } from "react-icons/ri";
import { BiDollar } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import { TbArrowsLeftRight } from "react-icons/tb";

function Booking() {
  return (
    <section id="booking">
      <div className="booking_container container">
        <h2>Booking</h2>
        <div className="sort_container">
          <div className="sort_text">
            <select className="sort" name="new">
              <option >New</option>
            </select>
            <select className="sort" name="Toyota">
              <option>Toyota</option>
            </select>
          </div>
          <div className="sort_grid">
            <MdOutlineDashboard className="grid1" />
            <TbArrowsLeftRight className="row1" />
          </div>
        </div>

        <div className="cars_container">
          {carsModels.map(
            ({ id, carName, amount, img, people, type, money }) => {
              return (
                <>
                  <div key={id} className="carCard">
                    <div className="car_title">
                      <h3>{carName}</h3>
                      <AiOutlineHeart />
                    </div>
                    <span style={{ color: `var(--gray-dark6)` }}>{amount}</span>
                    <img className="carImg" src={img} />
                    <div className="car_info">
                      <div className="info">
                        <AiOutlineUser
                          style={{
                            color: `var(--primary-purple)`,
                            marginRight: "0.2rem",
                          }}
                        />
                        <span>{people}</span>
                        <RiRepeatLine
                          style={{
                            color: `var(--primary-purple)`,
                            marginRight: "0.2rem",
                          }}
                        />
                        <span>{type}</span>
                      </div>
                      <div className="money">
                        <BiDollar />
                        <span>{money}</span>
                        <span style={{ color: `var(--gray-dark3)` }}>/d</span>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

export default Booking;
