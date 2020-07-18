import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import HomepageComponent from "./pages/homepage/homepage.component";
import ShopComponent from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentUser: null
        }
    }
    unsubscribeFromAuth = null;
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
            if(user) {
                const userRef = await createUserProfileDocument(user);
                userRef.onSnapshot(snapshot => { // get the actual document
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data() // gt the document content
                        }
                    })
                });
            }
            else {
                this.setState({currentUser: null});
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
                    <Header currentUser={this.state.currentUser} />
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

export default App;
