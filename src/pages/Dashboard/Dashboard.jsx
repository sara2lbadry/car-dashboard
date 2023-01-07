import React from "react";
import "./dashboard.css";
import { ImPower } from "react-icons/im";
import { CgArrowsVAlt } from "react-icons/cg";
import { ImDroplet } from "react-icons/im";
import { GiStoneWheel } from "react-icons/gi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import data from "../../data";

function Dashboard() {
  const percentage = 35;
  const percentage2 = 40;
  const percentage3 = 10;
  const percentage4 = 25;

  return (
    <section id="dashboard">
      <div className="dashboard_conatiner">
        <div className="cards_container">
          <div className="card-1 card">
            <div className="card_text">
              <ImPower className="icon1 icon" />
              <h2 className="card_title">Energy</h2>
              <CircularProgressbar
                value={percentage}
                text="45%"
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.6,
                  // Whether to use rounded or flat corners on the ends - can use 'round' or 'round'
                  strokeLinecap: "round",
                  strokeDashoffset: "60px",

                  // Text size
                  textSize: "18px",

                  // Colors
                  pathColor: "#fff",
                  textColor: "#fff",
                  trailColor: "#B37EFC",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>

          <div className="card">
            <div className="card_text">
              <CgArrowsVAlt className="icon2 icon" />
              <h2 className="card_title">Range</h2>
              <CircularProgressbar
                value={percentage2}
                text="157k%"
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.6,
                  // Whether to use rounded or flat corners on the ends - can use 'round' or 'round'
                  strokeLinecap: "round",
                  strokeDashoffset: "60px",

                  // Text size
                  textSize: "18px",

                  // Colors
                  pathColor: "#FF7E86",
                  textColor: "#000",
                  trailColor: "#F4F5F9",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>

          <div className="card">
            <div className="card_text">
              <ImDroplet className="icon3 icon" />
              <h2 className="card_title">Break fluid</h2>
              <CircularProgressbar
                value={percentage3}
                text="9%"
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.6,
                  // Whether to use rounded or flat corners on the ends - can use 'round' or 'round'
                  strokeLinecap: "round",
                  strokeDashoffset: "60px",

                  // Text size
                  textSize: "18px",

                  // Colors
                  pathColor: "#a162f7",
                  textColor: "#000",
                  trailColor: "#F4F5F9",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>

          <div className="card">
            <div className="card_text">
              <GiStoneWheel className="icon4 icon" />
              <h2 className="card_title">Tire Wear</h2>
              <CircularProgressbar
                value={percentage4}
                text="25%"
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.6,
                  // Whether to use rounded or flat corners on the ends - can use 'round' or 'round'
                  strokeLinecap: "round",
                  strokeDashoffset: "60px",

                  // Text size
                  textSize: "18px",

                  // Colors
                  pathColor: "#f6cc0d",
                  textColor: "#000",
                  trailColor: "#F4F5F9",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>
        </div>
        <div className="recharts_container">
          <h2>Mile Statistics</h2>
          <div className="recharts_text">
            <div className="days">
              <span>Day</span>
              <span>Week</span>
              <span>Month</span>
            </div>
            <div className="miles"><span>Miles</span></div>
          </div>
          <ResponsiveContainer width="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#094bb4" />
              <Bar dataKey="stats" fill="#515964" barSize={30} />
              <Tooltip wrapperClassName="tooltip__style" cursor={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
