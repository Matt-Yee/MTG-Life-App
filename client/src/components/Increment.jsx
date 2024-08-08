import React from 'react';
import PropTypes from 'prop-types';
// import './increment.css';

const IncrementButton = ({ onIncrement }) => {
    return (
        <button onClick={onIncrement}>
            Increment
        </button>
    )
};

IncrementButton.propTypes = {
    onIncrement: PropTypes.func.isRequired
};

export default IncrementButton;