import React, {Component} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import './App.css';
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import * as userActions from "./redux/user/user-actions";
import {currentUserSelector} from "./redux/user/user-selector";
import {createStructuredSelector} from "reselect";
import CheckoutPage from "./pages/checkout/checkout.component";

class App extends Component {
    unsubscribeFromAuth = null;
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
            if(user) {
                const userRef = await createUserProfileDocument(user);
                userRef.onSnapshot(snapshot => { // get the actual document
                    this.props.setCurrentUser({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data() // gt the document content
                        }
                    });
                });
            }
            else {
                this.props.removeCurrentUser();
            }
        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="content">
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route exact path="/checkout" component={CheckoutPage} />
                    <Route exact path="/signIn" render={() => this.props.currentUser ?
                            <Redirect to="/" /> : <SignInAndSignUpPage />
                    } />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: currentUserSelector
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(userActions.setCurrentUser(user)),
    removeCurrentUser: () => dispatch(userActions.removeCurrentUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
