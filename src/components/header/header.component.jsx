import React from "react";

import "./header.styles.scss";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";

export default function Header({currentUser})
{
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo />
            </Link>
            <div className="options">
                <Link to="/shop" className="option" title="view all our catalogs">SHOP</Link>
                <Link to="/shop" className="option" title="contact us for any query">CONTACT</Link>
                {currentUser ?
                    <div className="option" title="sign out"
                         onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link to="/signIn" className="option" title="sign in">SIGN IN</Link>
                }
            </div>
        </div>
    )
}
