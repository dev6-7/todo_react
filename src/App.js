import logo from './logo.svg';
import './App.css';
import { PostRequest } from './componets/PostRequest';
import { TaskForm } from './componets/TaskForm';
import { AllTasks } from './componets/AllTasks';

//Shift + option + F
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task creating Form</h1>
        <TaskForm refreshComponent={AllTasks.forceUpdate}/>
      </header>
    </div>
  );
}

export default App;
