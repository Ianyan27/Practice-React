import {useState, useEffect} from 'react'

import ResourceCard from '../components/cards/ResourceCard'

import {getTasks} from '../services/api'

import '../css/Dashboard.css'

function Dashboard(){

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchTasks = async () => {
            try {
                const data = await getTasks(901612792997);
                setTasks(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    if(loading) return <p>Loading....</p>;
    if(error) return <p>Error: {error}</p>;

    return(
        <div className="dashboard">
            <div className="task-statuses">

            </div>
            <div className='resources'>
                {tasks.map(task => <ResourceCard task={task} key={task.id}/>)}
            </div>
        </div>
    )
}

export default Dashboard