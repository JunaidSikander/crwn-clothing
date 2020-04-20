import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import HatsPage from "./pages/hatspage/hatspage.component";
import {Switch, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/hats' component={HatsPage}/>
        </Switch>
    </div>
  );
}

export default App;
