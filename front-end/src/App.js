import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import CustomerProducts from './pages/CustomerProducts';
import Login from './pages/Login';
import RegisterPage from './pages/RegisterPage';
// import MyProvider from './context/MyProvider';

function App() {
  return (
    // <MyProvider>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ RegisterPage } />
      <Route path="/customer/products" component={ CustomerProducts } />
    </Switch>
    // </MyProvider>
  );
}

export default App;
