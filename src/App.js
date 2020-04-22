import React, {Component} from 'react';
import HomePage from './pages/home/homepage.component'
import ShopPage from "./pages/shop/shoppage.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import {Switch, Route} from 'react-router-dom'
import { auth } from "./firebase/firebase.utils";

import './App.css';

class App extends Component{
    constructor(props){
        super();
        this.state = {
            currentUser: ''
        }
    }

    unSubcribeFromAuth  = null;
    componentDidMount() {
        this.unSubcribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({
                currentUser: user
            });

            console.log(user)
        })
    }
    componentWillUnmount() {
        this.unSubcribeFromAuth()
    }


    render() {
        return (
            <div className="App">
                <Header cureentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInAndSignUp}/>
                </Switch>
            </div>
        );
    }

}

export default App;
