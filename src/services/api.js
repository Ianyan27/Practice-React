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

    const tasks = data.tasks;

    const statusCount = {};

    for(let i = 0; i < tasks.length; i++){

        const status = tasks[i].status.status;

        if(statusCount[status]){
            statusCount[status]++;
        } else {
            statusCount[status] = 1;
        }
    }

    const statusArray = Object.entries(statusCount).map(([status, count]) => ({
        [status]: count
    }));

    console.log({tasks: data.tasks, statusArray});

    return {tasks: data.tasks, statusArray};
};