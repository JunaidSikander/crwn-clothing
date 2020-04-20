import React from 'react';
import HomePage from './pages/home/homepage.component'
import ShopPage from "./pages/shop/shoppage.component";
import Header from "./components/header/header.component";
import {Switch, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
        </Switch>
    </div>
  );
}

export default App;
