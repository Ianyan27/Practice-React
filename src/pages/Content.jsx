import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Dashboard from '../pages/Dashboard'

import '../css/Content.css'

function Content(){
    return(
    <div className='layout'>
        <div className='content-header'>
            <Header />
        </div>
        <div className='content-sidebar'>
                <Sidebar />
        </div>
        <div className='content-dashboard'>
            <Dashboard />
        </div>
    </div>
    )
}

export default Content