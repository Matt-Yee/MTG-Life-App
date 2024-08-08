import React from 'react';
import PropTypes from 'prop-types';

const ResetButton = ({ onReset }) => {
    return (
        <button onClick={onReset}>
            Reset Life
        </button>
    )
};

ResetButton.propTypes = {
    onReset: PropTypes.func.isRequired
};

export default ResetButton;