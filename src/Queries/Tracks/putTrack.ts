import { TPutData, TPutReturn } from "../../Types/Api/putTrack";

const URL = "http://localhost:3000/";

export const putTrack = async (
  postData: TPutData,
  type: "library" | "queue"
): Promise<TPutReturn> => {
  const response = await fetch(URL + type + "/add", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  console.log("response", response);

  return response.json();
};
