function ResourceCard({task}) {
    return(
        <div className="resource-card">
            <div className="resource-item">
                <div className="resource-name">
                    <span>{task.name}</span>
                </div>
                <div className="resource-total-tasks">
                    
                </div>
            </div>
        </div>
    )
}

export default ResourceCard