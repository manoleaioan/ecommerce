import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

const HastPage = () => (
  <div>HATS PAGE </div>
);

function App() {
  return (
    <div>
      <Switch>
       <Route exact path='/' component={HomePage} />
       <Route exact path='/hats' component={HastPage} />
      </Switch>
    </div>
  );
}

export default App;