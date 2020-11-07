import React from "react";
import { Task } from "./Types";
import TaskItem from "./TaskItem";

type Props = {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> =  ({ tasks, setTasks }) => {
    const handleDone = (task: Task) => {
        setTasks(prev => prev.map(t => 
            t.id === task.id 
                ? {...task, done: !task.done, doneAt: new Date()} 
                : t
        ))
    }

    const handleDelete = (task: Task) => {
        setTasks(prev => prev.filter(t => t.id !== task.id))
    }

    return (
        <div className='inner'>
            {
                tasks.length <= 0 ? 'not exist TODO item.' :
                <ul className='task-list'>
                    {
                        tasks.map(t => (
                            <TaskItem
                                key={t.id}
                                task={t}
                                handleDone={handleDone}
                                handleDelete={handleDelete}
                            />
                        ))
                    }
                </ul>
            }
        </div>
    )
}

export default TaskList