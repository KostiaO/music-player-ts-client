import React, { useEffect, useState } from "react";
import { FormGroup } from "../../Module/Form/FormGroup";
import { useAuthLogin } from "../../../Api/Auth/useAuth";
import { useCookies } from "react-cookie";

export const Login: React.FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [authType, setAuthType] = useState<"login" | "register" | null>(null);

  const [cookies, setCookie, removeCookie] = useCookies(["JWT"]);

  const { loginData, loginError, loginFetch } = useAuthLogin(
    {
      id: login,
      password,
    },
    authType as "login" | "register"
  );

  const submitAction = () => {
    if (authType) {
      loginFetch();
    } else {
      console.log("Ты еблан, как ты это сделал?");
    }
  };

  useEffect(() => {
    if (loginData) {
      if (loginData.hasOwnProperty("accessToken")) {
        setCookie("JWT", {
          accessToken: loginData.accessToken,
        });
      }
    }

    if (loginError) {
      console.log(loginError);
    }
  }, [loginData, loginError]);

  return (
    <FormGroup submitFn={submitAction}>
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
      <button type="submit" onClick={() => setAuthType("login")}>
        login
      </button>
      <button type="submit" onClick={() => setAuthType("register")}>
        register
      </button>
    </FormGroup>
  );
};
