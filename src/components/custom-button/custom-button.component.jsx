import React from "react";
import "./custom-button.styles.scss";

export default function CustomButton({children, isSignInWithGoogle, ...otherProps})
{
    return (
        <button className={`${isSignInWithGoogle ? 'sign-in-with-google': ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
