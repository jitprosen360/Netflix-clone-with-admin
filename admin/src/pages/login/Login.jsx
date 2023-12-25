import React, { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    };

    return (
        <div className="login">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
            <form className="form-signin">
                <img className="mb-4" src="https://i.pinimg.com/originals/86/d5/1f/86d51f5dcc9f69581dcbe497a280019e.png" alt=""
                    width="180" height="180" />
                <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>

                <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        name="username" id="floatingInput"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="floatingInput">Email</label>
                </div>

                <div className="form-floating">
                    <input type="password"
                        className="form-control"
                        name="password"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label for="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>

                <button
                    className="w-100 btn btn-lg btn-primary"
                    type="submit" 
                    onClick={handleLogin}
                    disabled={isFetching}>Sign in
                </button>
            </form>
        </div>
    );
}