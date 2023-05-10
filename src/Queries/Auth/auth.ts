import { TAuthReturn, TAuthUser } from "../../Types/Api/auth";

const URL = "http://localhost:3000/auth/";

export const authLogin = async (
  postData: TAuthUser,
  type: "login" | "register"
): Promise<TAuthReturn> => {
  const response = await fetch(URL + type, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
    body: JSON.stringify(postData),
  });

  return response.json();
};
