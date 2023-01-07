import React from "react";
import "./dashboard.css";
import { SlEnergy } from "react-icons/sl";
import { CgArrowsVAlt } from "react-icons/cg";
import { ImDroplet } from "react-icons/im";
import { GiStoneWheel } from "react-icons/gi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Dashboard() {
  const percentage = 35;
  const percentage2 = 40;
  const percentage3 = 10;
  const percentage4 = 25;


  return (
    <section id="dashboard">
      <div className="dashboard_conatiner">
        <div className="cards_container">
          <div className="card-1">
            <div className="card_text">
              <SlEnergy />
              <h4 className="card_titile">Energy</h4>
              <CircularProgressbar
                value={percentage}
                text="45%"
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.6,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  strokeDashoffset: "60px",

                  // Text size
                  textSize: "16px",

                  // Colors
                  pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
              ;
            </div>
          </div>

          <div className="card">
            <div className="card_text">
              <CgArrowsVAlt />
              <h4 className="card_titile">ٌRange</h4>
              <CircularProgressbar
                value={percentage2}
                text="157k%"
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.6,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  strokeDashoffset: "60px",

                  // Text size
                  textSize: "16px",

                  // Colors
                  pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>

          <div className="card">
            <div className="card_text">
              <ImDroplet />
              <h4 className="card_titile">Break fluid</h4>
              <CircularProgressbar
                value={percentage3}
                text="9%"
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.6,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  strokeDashoffset: "60px",

                  // Text size
                  textSize: "16px",

                  // Colors
                  pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>

          <div className="card">
            <div className="card_text">
              <GiStoneWheel />
              <h4 className="card_titile">Tire Wear</h4>
              <CircularProgressbar
                value={percentage4}
                text="25%"
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.6,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  strokeDashoffset: "60px",

                  // Text size
                  textSize: "16px",

                  // Colors
                  pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
