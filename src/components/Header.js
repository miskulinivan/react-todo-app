import React from 'react';
import Button from './Button';
const Header = ({ openForm, showForm }) => {
    return (
        <div className='header'>
            <h2>React todo application</h2>
            <Button text='add' openForm={openForm} showForm={showForm} />
        </div>
    );
};

export default Header;
