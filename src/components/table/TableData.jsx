function formatDueDate(timestamp){
    return new Date(Number(timestamp)).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function getFolder(task) {
    return task.folder?.name ?? 'No Folder';
}

function getList(task) {
    return task.list?.name ?? 'No List';
}

function getPriority(task) {
    return task.priority?.priority ?? 'No Priority';
}

function TableData({task}){
    return(
        <tr>
            <td>{task.name}</td>
            <td>{getFolder(task)}</td>
            <td>{getList(task)}</td>
            <td>{getPriority(task)}</td>
            <td>{formatDueDate(task.due_date)}</td>
        </tr>
    )
}

export default TableData