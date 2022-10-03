import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const submit = e => {
        e.preventDefault();

        const trimmedText = text.trim();
        const trimmedDay = day.trim();

        if (!trimmedText || !trimmedDay) {
            alert("Please, input some texts.")
            return
        }

        onAdd({ trimmedText, trimmedDay, reminder });

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={submit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder="Add Task.." value={text} onChange={e => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder="Add Day & Time" value={day} onChange={e => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} onChange={e => setReminder(e.currentTarget.checked)} checked={reminder} />
            </div>

            <input type="submit" value="Save Task" className='btn btn-block' />
        </form>
    )
}

export default AddTask;