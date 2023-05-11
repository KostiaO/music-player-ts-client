const URL = "http://localhost:3000/discord/";

export const player = async (
  postData: { id: string },
  type: "start" | "skip" | "stop"
) => {
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
