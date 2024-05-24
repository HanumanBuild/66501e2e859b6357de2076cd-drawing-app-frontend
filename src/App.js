import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Draw from './pages/Draw';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="bg-blue-500 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white">Home</Link>
          </li>
          <li>
            <Link to="/login" className="text-white">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="text-white">Signup</Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-white">Dashboard</Link>
          </li>
          <li>
            <Link to="/draw" className="text-white">Draw</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/draw" component={Draw} />
      </Switch>
    </div>
  );
}

export default App;