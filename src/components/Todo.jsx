import { Card, Checkbox } from 'antd';
const Todo = ({ tasks, onChange }) => {
return (
        <div>
            <Card title="TO DO" className='border-black font-bold font-serif shadow-lg shadow-rose-200 rounded-2xl' style={{
                width: 400,
            }}>
                {tasks.map(task => {
                    return (<li key={task.id}>
                        <Checkbox onClick={() => onChange(task.id)}>
                            {task.value}
                        </Checkbox>
                    </li>)
                })}
            </Card>
        </div>
    );
}

export default Todo;