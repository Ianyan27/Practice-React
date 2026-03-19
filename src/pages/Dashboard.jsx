import {useState, useEffect} from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

import ResourceCard from '../components/cards/ResourceCard'

import {getTasks} from '../services/api'

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
        <div>
            <Header />
            <Sidebar />
            <div className="dashboard">
                <div className="task-statuses">

                </div>
                {tasks.map(task => <ResourceCard task={task} key={task.id}/>)}
            </div>
        </div>
    )
}

export default Dashboard