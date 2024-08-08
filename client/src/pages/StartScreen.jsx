import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const StartScreen = () => {
  const [numPlayers, setNumPlayers] = useState(0);
  const [started, setStarted] = useState(false);
  const [resumeGame, setResumeGame] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
   const lifeTotals = JSON.parse(localStorage.getItem("lifeTotals"));
   if (lifeTotals && lifeTotals.length > 0) {
      setResumeGame(true);
    }
   }, []);

  const handleStartGame = () => {
    setStarted(true);
    if (numPlayers === 0) {
      alert("Please select the number of players.");
    } else {
      navigate("/game", { state: { numPlayers } });
    }
  };

  const handleResumeGame = () => {
    setStarted(true);
    navigate("/game", { state: { lifeTotals: JSON.parse(localStorage.getItem("lifeTotals")) } });
  };

  const handleNumPlayers = (num) => {
    setNumPlayers(num);
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Number of Players
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleNumPlayers(2)}>2</Dropdown.Item>
          <Dropdown.Item onClick={() => handleNumPlayers(3)}>3</Dropdown.Item>
          <Dropdown.Item onClick={() => handleNumPlayers(4)}>4</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        <button onClick={handleStartGame}>{resumeGame ? 'New Game' : 'Start Game'}</button>
        <button onClick={handleResumeGame}>Resume Game</button>
    </div>
  );
};

export default StartScreen;