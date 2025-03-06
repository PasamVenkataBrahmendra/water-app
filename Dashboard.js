import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { WiHumidity, WiThermometer, WiRaindrop } from "react-icons/wi";
import { FaGoogle, FaAmazon } from "react-icons/fa";
import "./Dashboard.css"; // Import CSS file

const Dashboard = () => {
  const [humidity, setHumidity] = useState(65);
  const [temperature, setTemperature] = useState(28);
  const [waterLevel, setWaterLevel] = useState(75);
  const [forecast, setForecast] = useState("High water collection expected tomorrow");
  const [history, setHistory] = useState([
    { day: "Mon", water: 10 },
    { day: "Tue", water: 20 },
    { day: "Wed", water: 15 },
    { day: "Thu", water: 25 },
    { day: "Fri", water: 30 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHumidity((prev) => (prev > 70 ? 60 : prev + 2));
      setTemperature((prev) => (prev > 30 ? 25 : prev + 1));
      setWaterLevel((prev) => (prev > 90 ? 70 : prev + 2));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="title">AWH Smart Dashboard</h1>
      <div className="grid-container">
        <div className="card">
          <WiHumidity className="icon blue" />
          <span>Humidity: {humidity}%</span>
        </div>
        <div className="card">
          <WiThermometer className="icon red" />
          <span>Temp: {temperature}°C</span>
        </div>
        <div className="card">
          <WiRaindrop className="icon green" />
          <span>Water Level: {waterLevel}%</span>
        </div>
      </div>

      <div className="chart-container">
        <h2 className="subtitle">Water Collection Trends</h2>
        <LineChart width={600} height={300} data={history}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" />
          <Line type="monotone" dataKey="water" stroke="#3b82f6" />
        </LineChart>
      </div>

      <div className="button-group">
        <button className="button-primary">Turn ON</button>
        <button className="button-secondary">Turn OFF</button>
      </div>

      <div className="forecast-container">
        <h2 className="subtitle">AI Forecast</h2>
        <p>{forecast}</p>
      </div>

      <div className="integration-buttons">
        <button className="google-button">
          <FaGoogle className="icon" /> Google Home
        </button>
        <button className="alexa-button">
          <FaAmazon className="icon" /> Alexa
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
