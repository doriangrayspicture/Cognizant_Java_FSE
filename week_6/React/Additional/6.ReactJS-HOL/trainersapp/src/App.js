import React from 'react';
import TrainerDetail from './TrainersDetail'; // Add this import
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import these
import Home from './Home'; // Import your Home component
import TrainersList from './TrainerList'; // Import your TrainersList component
import './App.css'; // Assuming you have App.css for basic styling or can add later

function App() {
  return (
    <BrowserRouter>
      <h1>My Academy Trainers App</h1> {/* As per Figure 7 */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/trainers">Show Trainers</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<TrainersList />} />
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<TrainersList />} />
        {/* Add this new route for TrainerDetail */}
        <Route path="/trainers/:id" element={<TrainerDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;