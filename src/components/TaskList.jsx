import Button from './Button';

const TaskList = ({ tasks, deleteTask }) => {
    return (
   
    <table>
        <thead>
        <tr>
            <th>#</th>
            <th>Tarea</th>
            <th>Acción</th>
        </tr>
        </thead>
        <tbody>
        {tasks.map((task) => (
            <tr  key={task.id}>
                <td style={{width:'120px'}}>{task.id}</td>
                <td style={{textAlign:'left'}}>{task.text}</td>
                <td style={{width:'100px'}}>
                    <Button label="Eliminar" onClick={() => deleteTask(task.id)}/>
                </td>
            </tr>
        ))}
        </tbody>
    </table>
    );
  };
  
  export default TaskList;