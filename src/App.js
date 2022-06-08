//components
import Header from './components/Header';
import Form from './components/Form';
import Tasks from './components/Tasks';

//utilities
import './index.css';
import Swal from 'sweetalert2';
import { v4 } from 'uuid';
import { useState, useEffect } from 'react';

import { css } from '@emotion/react';
import PacmanLoader from 'react-spinners/PacmanLoader';

function App() {
    //states
    const [showForm, setShowForm] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState('#cccccc');

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const override = css`
        display: block;
        margin: 0 auto;
    `;

    //functions
    const openForm = () => {
        setShowForm(!showForm);
    };

    const addToTasks = (text, date) => {
        let id = v4();
        const newArray = [...tasks, { id, text, date }];
        setTasks(newArray);
    };

    const deleteTask = (id) => {
        const newArray = tasks.filter((task) => task.id !== id);
        setTasks(newArray);

        Swal.fire({
            icon: 'success',
            text: 'Task successfully deleted !',
        });
    };

    const editTask = (id) => {
        const text = prompt('Date');
        const date = prompt('Date');
        const newArray = tasks.map((task) => {
            if (task.id === id) {
                return { ...tasks, text: text, date: date, id: v4() };
            }
            return task;
        });
        setTasks(newArray);
        Swal.fire({
            icon: 'success',
            text: 'Successfully edited!',
        });
    };

    return (
        <>
            {loading ? (
                <div style={{ marginTop: '2rem' }} className='sweet-loading '>
                    <PacmanLoader
                        color={color}
                        loading={loading}
                        css={override}
                        size={100}
                    />
                </div>
            ) : (
                <div className='container'>
                    <Header openForm={openForm} showForm={showForm} />
                    {showForm && <Form addToTasks={addToTasks} />}
                    {tasks.length > 0 ? (
                        <div className='grid'>
                            <Tasks
                                tasks={tasks}
                                deleteTask={deleteTask}
                                editTask={editTask}
                            />
                            <button
                                className='btn btn-clear'
                                onClick={() => setTasks([])}
                            >
                                Clear all
                            </button>
                        </div>
                    ) : (
                        <div className='tasks-empty'>No tasks added!</div>
                    )}
                </div>
            )}
        </>
    );
}

export default App;
