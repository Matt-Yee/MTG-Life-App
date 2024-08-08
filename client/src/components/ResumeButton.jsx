import React from 'react';
import PropTypes from 'prop-types';

const ResumeButton = ({ onResume }) => {
    return (
        <button onClick={onResume}>
            Resume Game
        </button>
    )
};

ResumeButton.propTypes = {
    onResume: PropTypes.func.isRequired
};

export default ResumeButton;