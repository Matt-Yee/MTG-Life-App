import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartScreen from '../src/pages/StartScreen';
import GameScreen from '../src/pages/GameScreen';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;