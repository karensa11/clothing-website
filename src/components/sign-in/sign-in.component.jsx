import React, {Component} from "react";

import "./sign-in.styles.scss";
import FormInput from "../common-components/form-input/form-input.component";
import CustomButton from "../common-components/custom-button/custom-button.component";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

export default class SignIn extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: "", password: ""});
        } catch (err) {
            alert(err.message);
        }
    };

    updateValue = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    render()
    {
        return (
            <div className="sign-in">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="title">I already have an account</h1>
                    <span>Sign in with your email and password</span>
                    <FormInput type="email" label="email" name="email"
                               value={this.state.email} handleChange={this.updateValue} required />
                    <FormInput type="password" label="password" name="password"
                               value={this.state.password} handleChange={this.updateValue} required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton isSignInWithGoogle onClick={signInWithGoogle}>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
