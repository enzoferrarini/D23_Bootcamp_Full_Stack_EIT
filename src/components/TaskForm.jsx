import {useState} from 'react'
import Button from './Button';
import Input from './Input';

const TaskForm = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskText.trim() !== '') {
            addTask({ id: Date.now(), text: taskText });
            setTaskText('');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex__container flex__row">
                    <Input 
                        type={"text"} 
                        placeholder={"Ingrese Nombre"} 
                        value={taskText}
                        onChange={(e) =>  setTaskText(e.target.value)}
                    />
                    <Button label="Agregar Tarea" type="submit"/>
                </div>
                
            </form>
        </>
    )
}

export default TaskForm