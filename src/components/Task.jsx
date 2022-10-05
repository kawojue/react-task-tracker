import { FaTimes } from 'react-icons/fa';

export const Task = ({ task, onDelete, onToggle }) => {
    const { id, text, day, reminder } = task;
    return (
        <div className={`flex w-full p-5 justify-between flex-col bg-slate-400 rounded-md mb-3 border-l-4 border-l-black trans hover:bg-slate-700 ${reminder === true ? 'border-l-4 border-l-green-600' : ''}`} onDoubleClick={() => onToggle(id)}>
            <h3 className="">
                {text}
                <FaTimes onClick={() => onDelete(id)} />
            </h3>
            <p>{day}</p>
        </div>
    )
}

export default Task;