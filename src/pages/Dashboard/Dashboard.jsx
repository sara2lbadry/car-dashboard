import React from "react";
import "./dashboard.css";
import { ImPower } from "react-icons/im";
import { CgArrowsVAlt } from "react-icons/cg";
import { ImDroplet } from "react-icons/im";
import { GiStoneWheel } from "react-icons/gi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import data from "../../data";
import { AreaChart, Area } from "recharts";
import { carStatics } from "../../data";
import Carcards from "../../components/CarCards/Carcards";

function Dashboard() {
  const percentage = 35;
  const percentage2 = 40;
  const percentage3 = 10;
  const percentage4 = 25;
  const formatter = (value) => {
    return [value, ""];
  };
  const CustomizedTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{label}</p>
          <p className="value">{payload[0].value}</p>
        </div>
      );
    }

    return null;
  };
  return (
    <section id="dashboard">
      <div className="dashboard_conatiner container">
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
          <div className="chart_sec">
            <h3>Mile Statistics</h3>
            <div className="recharts_text">
              <div className="days">
                <span>Day</span>
                <span>Week</span>
                <span>Month</span>
              </div>
              <div className="miles">
                <span>256 Miles</span>
              </div>
            </div>
            <div className="chartContainer">
              <ResponsiveContainer className="resChart">
                <BarChart data={data} width={150} height={40}>
                  <XAxis dataKey="name" stroke="#808191" fill="#F4F5F9" />
                  <Bar
                    dataKey="stats"
                    color="#000"
                    fill="#F4F5F9"
                    barSize={30}
                    className="bar"
                  />
                  <Tooltip
                    formatter={formatter}
                    separator=""
                    content={<CustomizedTooltip />}
                    cursor={{ fill: "transparent" }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="chart_sec">
            <h3>Car Statistics</h3>
            <div className="recharts_text">
              <div className="miles">
                <span>20 February 2022</span>
              </div>
              <div className="days">
                <span style={{ backgroundColor: "#FF764C" }}>Day</span>
                <span>Week</span>
                <span>Month</span>
              </div>
            </div>
            <div className="chartContainer">
              <ResponsiveContainer className="resChart" width="100%">
                <AreaChart
                  data={carStatics}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FFDDBE" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#eeeceb" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#808191" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#808191" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#808191" />

                  <CartesianGrid strokeDasharray="0" stroke="#c1911913" />
                  <Tooltip wrapperClassName="tooltip__style" cursor={false} />
                  <Area
                    type="monotone"
                    dataKey="week"
                    stroke="#ff764c"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                  />
                  <Area
                    type="monotone"
                    dataKey="prevWeek"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <Carcards />
      </div>
    </section>
  );
}

export default Dashboard;
