import Input from './components/Input'
import { useState } from 'react'
import Todo from './components/Todo'
import Completed from './components/Completed'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [taskState, setTaskState] = useState(
    {
      tasks: [],
      completed: []
    }
  )

  //! Adding a task to Object with the reference sended by the on Add function of input
  const handleAddTask = (taskData) => {
    setTaskState(prevState => {
      const newTask = {
        ...taskData,
        id: uuidv4(),
      }
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      }
    })
  }

  const handleSelectTasks = (id) => {
    setTaskState(prevState => {
      const filterTask = taskState.tasks.filter(
        (item) => item.id == id
      )
      const task = taskState.tasks.filter(
        (item) => item.id != id
      )
      return {
        ...prevState,
        tasks: task,
        completed: [...prevState.completed, filterTask[0]],
      }
    });
  }

  const handleDeSelecteTask = (id) => {
    setTaskState(prevState => {
      const filterTask = taskState.completed.filter(
        (item) => item.id == id
      )
      const task = taskState.completed.filter(
        (item) => item.id != id
      )
      return {
        ...prevState,
        tasks: [...prevState.tasks, filterTask[0]],
        completed: task,
      }
    });
  }

  return (
    <div className=' flex justify-center items-center h-screen bg-[#efefef]'>
      <div className='h-3/5 flex flex-col items-center bg-slate-400 p-8 rounded-xl border-[3px] border-stone-600'>
        <header className='w-2/3 flex justify-center rounded-md'>
          <Input onAdd={handleAddTask} tasks={taskState.tasks} completed={taskState.completed} />
        </header>
        <main className=' flex justify-center gap-10 w-[90%] my-8'>
          <Todo tasks={taskState.tasks} onChange={handleSelectTasks} />
          <Completed tasks={taskState.completed} onChange={handleDeSelecteTask} />
        </main>
      </div>
    </div>
  )
}

export default App
