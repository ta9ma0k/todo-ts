import React from 'react';
import { Task } from "./Types";
import { useState } from "react";

type Props = {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
    tasks: Task[]
}

const TaskInput: React.FC<Props> = ({ setTasks, tasks }) => {
    const [ inputTitle, setInputTitle ] = useState<string>('')
    const [ count, setCount ] = useState<number>(tasks.length + 1)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value)
    }

    const handleSubmit = () => {
        setCount(prev => prev + 1)

        const newTask: Task = {
            id: count,
            title: inputTitle,
            done: false,
        }

        setTasks(prev => [newTask, ...prev])
        setInputTitle('')
    }

    return (
        <div>
            <div className='inputForm'>
                <div className='inner'>
                    <input
                        type='text'
                        className='input'
                        value={inputTitle}
                        onChange={handleOnChange}
                    />
                    <button
                        onClick={handleSubmit}
                        className='btn is-primary'
                    >ADD</button>
                </div>
            </div>
        </div>
    )
}

export default TaskInput