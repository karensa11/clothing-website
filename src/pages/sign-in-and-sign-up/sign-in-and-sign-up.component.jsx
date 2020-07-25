import React, {useEffect} from "react";
import "./sign-in-and-sign-up.styles.jsx.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import {updateDocumentTitle} from "../../utils";

export default function SignInAndSignUpPage()
{
    useEffect(() => {
        updateDocumentTitle("Sign In");
    });
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}
