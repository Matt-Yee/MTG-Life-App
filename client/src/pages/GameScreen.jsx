import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import IncrementButton from "../components/Increment.jsx";
import DecrementButton from "../components/Decrement.jsx";
import LifeDisplay from "../components/Life.jsx";
import ResetButton from "../components/ResetButton.jsx";
import BackButton from "../components/BackButton.jsx";

const GameScreen = () => {
  const location = useLocation();
  const numPlayers = location.state?.numPlayers;
  console.log(numPlayers);
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  const [lifeTotals, setLifeTotals] = useState({});

  useEffect(() => {
    if (numPlayers > 0) {
      setLifeTotals(Array(numPlayers).fill(40));
    }
  }, [numPlayers]);

  useEffect(() => {
    localStorage.setItem("lifeTotals", JSON.stringify(lifeTotals));
  }, [lifeTotals]);

  useEffect(() => {
    if (location.state) {
      if (location.state.numPlayers) {
        const players = [];
        for (let i = 0; i < location.state.numPlayers; i++) {
          players.push({ player: `Player ${i + 1}`, life: 20 });
        }
        setPlayers(players);
      } else if (location.state.lifeTotals) {
        setLifeTotals(location.state.lifeTotals);
      }
    }
  }, [location]);

  useEffect(() => {
    if (Object.keys(lifeTotals).length > 0) {
      const players = Object.keys(lifeTotals).map((key, index) => {
        return { player: `Player ${index + 1}`, life: lifeTotals[key] };
      });
      setPlayers(players);
    }
  }, [lifeTotals]);

  const handleIncrement = (index) => {
    const newLifeTotals = [...lifeTotals];
    newLifeTotals[index] += 1;
    setLifeTotals(newLifeTotals);
  };

  const handleDecrement = (index) => {
    const newLifeTotals = [...lifeTotals];
    newLifeTotals[index] -= 1;
    setLifeTotals(newLifeTotals);
  };

  const handleReset = () => {
    setLifeTotals(Array(numPlayers).fill(40));
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      {lifeTotals.length > 0 &&
        lifeTotals.map((life, index) => (
          <div key={index}>
            <LifeDisplay life={life} />
            <IncrementButton onIncrement={() => handleIncrement(index)} />
            <DecrementButton onDecrement={() => handleDecrement(index)} />
            <ResetButton onReset={handleReset} />
          </div>
        ))}
      <BackButton onBack={handleBack} />
    </div>
  );
};

export default GameScreen;