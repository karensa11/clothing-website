import React, {Component} from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

export default class SignIn extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email: "", password: ""});
    };

    updateValue = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render()
    {
        return (
            <div className="sign-in">
                <form onSubmit={this.handleSubmit}>
                    <h1>I already have an account</h1>
                    <span>Sign in with your email and password</span>
                    <FormInput type="email" label="email" name="email" value={this.state.email} handleChange={this.updateValue} required />
                    <FormInput type="password" label="password" name="password" value={this.state.password} handleChange={this.updateValue} required />
                    <CustomButton type="submit">Sign in</CustomButton>
                </form>
            </div>
        )
    }
}
