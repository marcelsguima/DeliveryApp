import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/register" />
      </Route>
      <Route path="/register" component={ RegisterPage } />
    </Switch>
  );
}

export default App;
