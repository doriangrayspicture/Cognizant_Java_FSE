import React from 'react';
import './App.css'; // Assuming you still have this import
import Posts from './Components/Posts'; // Import your Posts component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* You can keep or remove existing content here */}
        <p>
          Welcome to my Blog App!
        </p>
      </header>
      <main>
        <Posts /> {/* Render your Posts component here */}
      </main>
    </div>
  );
}

export default App;