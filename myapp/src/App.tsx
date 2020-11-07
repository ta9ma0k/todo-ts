import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Task } from './components/Types';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const initialState: Task[] = []

function App() {
  const [tasks, setTasks] = useState(initialState)
 
  return (
      <div>
          <TaskInput setTasks={setTasks} tasks={tasks} />
          <TaskList setTasks={setTasks} tasks={tasks} />
      </div>
  )
}

export default App;
