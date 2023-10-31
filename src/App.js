import './App.css';
import React, { useState } from 'react';
import { TaskForm } from './componets/TaskForm';
import { AllTasks } from './componets/AllTasks';
import { Table } from './componets/Table';

//Shift + option + F -> format code
function App() {
  const [shouldRerender, setShouldRerender] = useState(true);

  // Function to trigger re-render in Component AllTasks
  const triggerRerender = () => {
    setShouldRerender(!shouldRerender);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task creating Form</h1>
        <TaskForm triggerRerender={triggerRerender} />
        <Table shouldRerender={shouldRerender} />
      </header>
    </div>
  );
}
//<AllTasks shouldRerender={shouldRerender} />

export default App;
