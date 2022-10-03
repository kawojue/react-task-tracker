import { FaTimes } from 'react-icons/fa';

export const Task = ({ task, onDelete, onToggle }) => {
    const { id, text, day, reminder } = task;
    return (
        <div className={`task ${reminder === true ? 'reminder' : ''}`} onDoubleClick={() => onToggle(id)}>
            <h3>
                {text}
                <FaTimes onClick={() => onDelete(id)} />
            </h3>
            <p>{day}</p>
        </div>
    )
}

export default Task;