import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import HomepageComponent from "./pages/homepage/homepage.component";
import ShopComponent from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import * as userActions from "./redux/user/user-actions";

class App extends Component {
    constructor(props) {
        super(props);
        this.props.removeCurrentUser();
    }
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
            <BrowserRouter>
                <div className="content">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={HomepageComponent}/>
                        <Route exact path="/shop" component={ShopComponent}/>
                        <Route exact path="/signIn" component={SignInAndSignUp}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(userActions.setCurrentUser(user)),
    removeCurrentUser: (user) => dispatch(userActions.removeCurrentUser())
});

export default connect(null, mapDispatchToProps)(App);
