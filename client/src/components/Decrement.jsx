import React from 'react';
import PropTypes from 'prop-types';
// import './dncrement.css';

const DecrementButton = ({ onDecrement }) => {
    return (
        <button onClick={onDecrement}>
            Decrement
        </button>
    )
};

DecrementButton.propTypes = {
    onDecrement: PropTypes.func.isRequired
};

export default DecrementButton;