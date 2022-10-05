import { useState, useEffect } from 'react';
import Header from './components/Header';
import Task from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data
  }

  useEffect(() => {
    const getTasks = async () => {
      const fetchTasksFromSever = await fetchTasks();
      setTasks(fetchTasksFromSever);
    }

    getTasks();
  }, [])


  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })
    const newTask = tasks.filter(task => task.id !== id);
    setTasks([...newTask])
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data
  }
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    });

    const newTask = tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task)
    setTasks([...newTask]);
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task)
    })
    const data = await res.json();
    let id = 0;
    let newArr = [];
    const IDList = [];
    tasks.forEach(task => {
      IDList.push(task.id);
    })

    const getMax = Math.max(...IDList)

    for (let i = 1; i <= getMax; i++) {
      if (!IDList.includes(i)) {
        newArr.push(i)
      }
    }

    if (tasks.length === getMax) {
      id = tasks.length + 1;
    } else {
      id = newArr[0]
    }

    const newTask = { id, ...data }
    setTasks([...tasks, newTask])
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