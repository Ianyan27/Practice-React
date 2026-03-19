const API_TOKEN = "pk_102722074_1EXFNWH2G7B332UXZNP58G128TVNDZLV"
const BASE_URL = "https://api.clickup.com/api/v2"

export const getTasks = async (listId) => {
    const response = await fetch(`${BASE_URL}/list/${listId}/task`, {
        method: "GET",
        headers: {
            "Authorization": API_TOKEN,
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json();

    return data.tasks;
};