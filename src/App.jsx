import Text from './components/Text';
import './styles/App.css';
import {useState,useEffect} from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

  function App() {
    useEffect(() => {
      document.title = 'Desafío N° 23'; 
    }, []); 

    //State to control tasks array
    const [tasks, setTasks] = useState([]);
    
    //Adding task to tasks array 
    const addTask = (newTask) => {
      setTasks([...tasks, newTask]);
    };

    //Delete task by Id from tasks array
    const deleteTask = (taskId) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (      
      <div className="App"> 
        <div className="form__container">
          <div className="flex__container flex__column p__LeftRight--3">
            <Text renderAs="h1" content="Listado de Tareas"/>      
            <hr></hr>      
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>          
        </div>
      </div>
    );
  }
  export default App;
