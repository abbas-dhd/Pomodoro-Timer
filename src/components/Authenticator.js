import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase.js";
import classes from "./Authenticator.module.css";

const Authenticator = (props) => {
    const LOGO_URL =
        "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png";

    const googleSignIn = async () => {
        const auth = getAuth(app);
        const googleAuthProvider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, googleAuthProvider)
            .then((res) => {
                console.log("success");
                return res;
            })
            .catch((error) => {
                console.log("failed");
                console.log(error.message);
            });

        // console.log(result);
//         result ? console.log(result) : console.log("nope");
        props.onLogin(result);
        // return;
    };
    return (
        <div className={classes["login-container"]}>
            <button className={classes["login-btn"]} onClick={googleSignIn}>
                <span className={classes["btn-span-img"]}>
                    <img src={LOGO_URL} alt="google logo" />
                </span>
                <span className={classes["btn-span-label"]}>
                    Login with Google
                </span>
            </button>
        </div>
    );
};

export default Authenticator;
