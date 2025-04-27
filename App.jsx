import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Portfolio from './components/Portfolio';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            isAuthenticated ? 
            <Navigate to="/portfolio" /> : 
            <Login setIsAuthenticated={setIsAuthenticated} />
          } />
          <Route path="/portfolio" element={
            isAuthenticated ? 
            <Portfolio /> : 
            <Navigate to="/" />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 