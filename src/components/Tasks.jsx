import { useState } from 'react';

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: "Feb 5th at 2:30pm",
            reminder: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: "Feb 6th at 1:30pm",
            reminder: true
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: "Feb 5th at 2:30pm",
            reminder: false
        },
    ])

    return (
        <>
            {tasks.map(task => {
                const { id, text } = task;
                return (
                    <h1 key={id}>{text}</h1>
                )
            })}
        </>
    );
}

export default Tasks;