import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import { Switch, Route, Redirect } from "react-router-dom";
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <span className="logo">APP DELIVERY</span>
      <Switch>
          <Route exact path="/login" component={Login} />
           <Redirect exact from="/" to="/login" />
        </Switch>
    </div>
  );
}

export default App;
