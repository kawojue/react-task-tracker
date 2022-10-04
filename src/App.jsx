import { useState } from 'react';
import Header from './components/Header';
import Task from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
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
  ]);

  const addTask = (task) => {
    const id = tasks.length + 1;
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = id => {
    const newTask = tasks.filter(task => task.id !== id);
    setTasks([...newTask])
  }

  const toggleReminder = id => {
    const newTask = tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task)
    setTasks([...newTask]);
  }

  return (
    <>
      <div className="container">
        <Header title="Task Tracker" onShowAddTask={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {
          tasks.length !== 0 ?
            <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Task> :
            <h3>No Tasks to show.</h3>
        }
      </div>
    </>
  )
}

export default App;
