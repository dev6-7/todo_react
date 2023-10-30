import './App.css';
import React, { useState } from 'react';
import { TaskForm } from './componets/TaskForm';
import { AllTasks } from './componets/AllTasks';

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
        <AllTasks shouldRerender={shouldRerender} />
      </header>
    </div>
  );
}

export default App;
