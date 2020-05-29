import React, {Component} from 'react';
import {createStructuredSelector} from "reselect";
import {connect} from 'react-redux';
import HomePage from './pages/home/homepage.component'
import ShopPage from "./pages/shop/shoppage.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import {Redirect, Route, Switch} from 'react-router-dom'
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from './redux/user/user.actions'

import './App.css';
import {selectCurrentUser} from "./redux/user/user.selector";
import Checkout from "./pages/checkout/checkcout.component";

class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        }
        );
      } else {
        setCurrentUser(userAuth)
      }
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp/>)} />
          <Route extact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
