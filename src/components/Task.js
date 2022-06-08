import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
const Task = ({ task, deleteTask, editTask }) => {
    const { text, date, id } = task;
    return (
        <div className='task'>
            <div>
                <p className='task-name'>
                    <span className='bold'>Task Name : </span>
                    {text}
                </p>
                <span className='bold'>Due date : </span>
                {date}
            </div>
            <div>
                <p>
                    <AiFillDelete onClick={() => deleteTask(id)} color='red' />
                </p>
                <p>
                    <FiEdit onClick={() => editTask(id)} color='green' />
                </p>
            </div>
        </div>
    );
};

export default Task;
