import React, { useEffect, useState } from "react";
import { FormGroup } from "../../Module/Form/FormGroup";
import { useAuthLogin } from "../../../Api/Auth/useAuthLogin";

export const Login: React.FC = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const { loginData, loginError, loginFetch } = useAuthLogin({
        id: login,
        password   
    });

    const submitAction = () => {
        loginFetch();
    }

    useEffect(() => {
        if (loginData) {
            console.log(loginData);
        }

        if (loginError) {
            console.log(loginError);
        }
    }, [loginData, loginError]);

    return (
        <FormGroup
            submitFn={submitAction}
        >
            <label>
                <h2>Login</h2>
            </label>
            <input
                id="login"
                value={login}
                onChange={({ target: { value } }) => setLogin(value)}
            />
            <label>
                <h2>Password</h2>
            </label>
            <input
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
            />
            <button
                type="submit"
            >
                login
            </button>
        </FormGroup>
    )
}