import { TGetTracksData, TGetTracksReturn } from "../../Types/Api/getTrack";

const URL = "http://localhost:3000/get/";

export const getTracks = async (
  postData: TGetTracksData,
  type: "library" | "queue"
): Promise<TGetTracksReturn> => {
  const response = await fetch(URL + type, {
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
