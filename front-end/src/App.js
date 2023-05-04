import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Switch>
      <Route path="/register" component={ RegisterPage } />
    </Switch>
  );
}

export default App;
