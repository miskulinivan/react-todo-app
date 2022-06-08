import React from 'react';

const Button = ({ text, openForm, showForm }) => {
    return (
        <button
            onClick={openForm}
            className={`btn btn-${showForm ? 'primary' : 'secondary'}`}
        >
            {showForm ? 'Close' : 'Add'}
        </button>
    );
};

export default Button;
