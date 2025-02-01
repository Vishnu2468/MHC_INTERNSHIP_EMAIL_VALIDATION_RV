// Filename - App.js

import React, { useState } from "react";
import validator from "validator";

const Email_validation = () => {
    const [emailError, setEmailError] = useState("");
    const validateEmail = (e) => {
        const email = e.target.value;

        if (validator.isEmail(email)) {
            setEmailError("Valid Email :)");
        } else {
            setEmailError("Enter valid Email!");
        }
    };

    return (
        <div
            style={{
                margin: "auto",
                alignItems:"center"
            }}
        >
            <pre>
                <h2>Validating Email in ReactJS</h2>
                <span>Enter Email: </span>
                <input
                    type="text"
                    id="userEmail"
                    onChange={(e) => validateEmail(e)}
                ></input>{" "}
                <br />
                <span
                    style={{
                        fontWeight: "bold",
                        color: "black"
                    }}
                >
                    {emailError}
                </span>
            </pre>
        </div>
    );
};

export default Email_validation;
