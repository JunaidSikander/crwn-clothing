import React, {Component} from 'react';
import HomePage from './pages/home/homepage.component'
import ShopPage from "./pages/shop/shoppage.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import {Switch, Route} from 'react-router-dom'
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import './App.css';

class App extends Component{
    constructor(props){
        super();
        this.state = {
            currentUser: ''
        }
    }

    unSubscribeFromAuth  = null;
    componentDidMount() {
        this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    }, () => console.log(this.state))
                });
            } else {
              this.setState({currentUser: userAuth})
            }
        })
    }
    componentWillUnmount() {
        this.unSubscribeFromAuth()
    }


    render() {
        return (
            <div className="App">
                <Header currentUser={this.state.currentUser}/>
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