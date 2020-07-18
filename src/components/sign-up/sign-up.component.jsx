import React, {Component} from "react";
import "./sign-up.styles.scss";
import FormInput from "../common-components/form-input/form-input.component";
import CustomButton from "../common-components/custom-button/custom-button.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

export default class SignUp extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords do not match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password); // create the user in firestore auth (and login)
            const userData = {uid: user.uid, email: user.email, displayName: displayName};
            await createUserProfileDocument(userData);  // create the user in the database
            this.setState({ // reset input
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
        }
        catch(err) {
            console.log("failed to create", err.message);
        }

    };
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };
    render()
    {
        return (
            <div className="sign-up">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="title">I don't have an account</h1>
                    <span>Sign up with your email and password</span>
                    <FormInput
                        handleChange={this.handleChange}
                        name="displayName"
                        value={this.state.displayName}
                        label="display name"
                        />
                    <FormInput
                        handleChange={this.handleChange}
                        name="email"
                        value={this.state.email}
                        label="email"
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        name="password"
                        value={this.state.password}
                        label="password"
                        title="at least 6 characters"
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        label="confirm password"
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
