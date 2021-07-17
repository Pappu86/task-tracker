import { useState } from "react";
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  const [tasks, setTasks]=useState([
    {
        id:1,
        text:'New Task-01',
        day:'Feb 5th at 2:30pm',
        reminder:true
    },
    {
        id:2,
        text:'New Task-02',
        day:'Feb 5th at 2:30pm',
        reminder:true
    },
    {
        id:3,
        text:'New Task-03',
        day:'Feb 5th at 2:30pm',
        reminder:true
    }
]);

  return (
    <div className="flex-container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
