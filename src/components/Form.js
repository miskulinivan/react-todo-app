import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Form = ({ addToTasks }) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text && !date) {
            Swal.fire({
                icon: 'error',
                text: 'Enter text and data please !',
            });
        } else if (!text && date) {
            Swal.fire({
                icon: 'error',
                text: 'Enter text please !',
            });
        } else if (text && !date) {
            Swal.fire({
                icon: 'error',
                text: 'Enter date please !',
            });
        } else {
            addToTasks(text, date);
            Swal.fire({
                icon: 'success',
                text: 'Added successfully',
            });

            setText('');
            setDate('');
        }
    };
    return (
        <form className='form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor=''>Task</label>
                <input
                    type='text'
                    placeholder='Add a task...'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label htmlFor=''>Date</label>
                <input
                    type='text'
                    placeholder='Add a date...'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <button className='btn btn-submit'>Submit</button>
        </form>
    );
};

export default Form;
