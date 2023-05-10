const URL = 'http://localhost:3000/auth/register';

export const authLogin = async (postData: any) => {
    const response = await fetch(URL, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData)
    });

    return response.json();
}