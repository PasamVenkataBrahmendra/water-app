import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { WiHumidity, WiThermometer, WiRaindrop } from "react-icons/wi";
import { FaGoogle, FaAmazon } from "react-icons/fa";

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
    <div>
      <h1>AWH Smart Dashboard</h1>
      <div>
        <Card>
          <CardContent>
            <WiHumidity />
            <span>Humidity: {humidity}%</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <WiThermometer />
            <span>Temp: {temperature}°C</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <WiRaindrop />
            <span>Water Level: {waterLevel}%</span>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2>Water Collection Trends</h2>
        <LineChart width={600} height={300} data={history}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" />
          <Line type="monotone" dataKey="water" stroke="#3b82f6" />
        </LineChart>
      </div>

      <div>
        <Button>Turn ON</Button>
        <Button>Turn OFF</Button>
      </div>

      <div>
        <h2>AI Forecast</h2>
        <p>{forecast}</p>
      </div>

      <div>
        <Button>
          <FaGoogle /> Google Home
        </Button>
        <Button>
          <FaAmazon /> Alexa
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
