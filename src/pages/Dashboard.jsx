import {useState, useEffect} from 'react'

import StatusCard from '../components/cards/StatusCard'
import ResourceCard from '../components/cards/ResourceCard'

import {getTasks} from '../services/api'

import '../css/Dashboard.css'

function Dashboard(){

    const [tasks, setTasks] = useState([]);
    const [statusCount, setStatusCount] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchTasks = async () => {
            try {
                const {tasks, statusArray} = await getTasks(901612792997);
                setTasks(tasks);
                setStatusCount(statusArray);
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
                {statusCount.map(count =>{
                    const label = Object.keys(count)[0];
                    return <StatusCard count={count} key={label}/>
                })}
            </div>
            <div className='resources'>
                {tasks.map(task => <ResourceCard task={task} key={task.id}/>)}
            </div>
        </div>
    )
}

export default Dashboard