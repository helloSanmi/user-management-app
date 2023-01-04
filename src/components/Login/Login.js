import React, { useState } from "react";
import propTypes from "prop-types";
import SignUp from "../SignUp/SignUp";


async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}


export default function Login({ setToken }) {
    const [authMode, setAuthMode] = useState("signin");
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const changeAuthMode = () => setAuthMode(authMode === "signin" ? "signup" : "signin");

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token)
    }

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleSubmit}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center">
                            Not registered?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                Sign Up
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Email Address"
                                onChange={e=>setUserName(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Password"
                                onChange={e=>setPassword(e.target.value)}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <SignUp />
    )

    Login.propTypes = {
        setToken: propTypes.func.isRequired
    }
}