import { Card, Checkbox } from 'antd';
const Completed = ({ tasks, onChange }) => {
    return (

        <div>
            <Card title="Completed" className='border-black shadow-lg shadow-rose-200 rounded-2xl font-bold font-serif' style={{
                width: 400,
            }}>
                {
                    tasks.map(task => <li key={task.id}>
                        <Checkbox onClick={() => onChange(task.id)} checked = "true">
                            {task.value}
                        </Checkbox>
                    </li>)
                }
            </Card>
        </div>
    );

}

export default Completed;