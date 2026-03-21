function StatusCard({count}){

    const [status, total] = Object.entries(count)[0];

    return(
    <div className='status-card'>
        <div className='status-item'> 
            <div className="status">
                <span>{status}</span>
            </div>
            <div className='status-count'>
                <span>{total}</span>
            </div>
        </div>
    </div>
    )
}

export default StatusCard