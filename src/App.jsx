import Header from './components/Header';
import Task from './components/Tasks';

function App() {

  return (
    <>
      <div className="container">
        <Header title="Task Tracker" />
        <Task></Task>
      </div>
    </>
  )
}

export default App;
