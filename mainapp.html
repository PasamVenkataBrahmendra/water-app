import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { WiHumidity, WiThermometer, WiRaindrop } from "react-icons/wi";
import { FaGoogle, FaAmazon } from "react-icons/fa";
import "./Dashboard.css"; // Ensure this file exists in the same directory

const Dashboard = () => {
  const [humidity, setHumidity] = useState(65);
  const [temperature, setTemperature] = useState(28);
  const [waterLevel, setWaterLevel] = useState(75);
  const [ecoScore, setEcoScore] = useState(85);
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
        <Card className="animated-card">
          <CardContent className="flex items-center p-4">
            <WiHumidity className="text-blue-500 text-4xl mr-2" />
            <span className="text-lg">Humidity: {humidity}%</span>
          </CardContent>
        </Card>
        <Card className="animated-card">
          <CardContent className="flex items-center p-4">
            <WiThermometer className="text-red-500 text-4xl mr-2" />
            <span className="text-lg">Temp: {temperature}°C</span>
          </CardContent>
        </Card>
        <Card className="animated-card">
          <CardContent className="flex items-center p-4">
            <WiRaindrop className="text-green-500 text-4xl mr-2" />
            <span className="text-lg">Water Level: {waterLevel}%</span>
          </CardContent>
        </Card>
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
        <Button className="button-primary">Turn ON</Button>
        <Button className="button-secondary">Turn OFF</Button>
      </div>

      <div className="forecast-container">
        <h2 className="subtitle">AI Forecast</h2>
        <p className="forecast-text">{forecast}</p>
      </div>

      <div className="integration-buttons">
        <Button className="google-button">
          <FaGoogle className="mr-2" /> Google Home
        </Button>
        <Button className="alexa-button">
          <FaAmazon className="mr-2" /> Alexa
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
