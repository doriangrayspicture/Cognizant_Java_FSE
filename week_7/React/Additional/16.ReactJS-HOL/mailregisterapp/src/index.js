import React from 'react';
import ReactDOM from 'react-dom/client'; // Note: For React 18+, it's 'react-dom/client'
import './index.css'; // Assuming you have a basic index.css
import App from './App'; // Import your App component
import reportWebVitals from './reportWebVitals'; // For performance monitoring

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* This is where your App component is rendered */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();