import React, {Component} from "react";

import "./header.styles.scss";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import * as PropTypes from "prop-types";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {cartHiddenSelector} from "../../redux/cart/cart-selector";
import {currentUserSelector} from "../../redux/user/user-selector";
import {createStructuredSelector} from "reselect";

class Header extends Component {
    render() {
        let {currentUser} = this.props;
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
                    <CartIcon />
                    {this.props.cartHidden ? null : <CartDropdown />}
                </div>
            </div>
        )
    }
}

Header.propTypes = {currentUser: PropTypes.any};

const mapStateToProps = createStructuredSelector({
    currentUser: currentUserSelector,
    cartHidden: cartHiddenSelector
});

export default connect(mapStateToProps)(Header);
