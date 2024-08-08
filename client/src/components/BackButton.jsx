import React from 'react';
import PropTypes from 'prop-types';

const BackButton = ({ onBack }) => {
    return (
        <button onClick={onBack}>
            Back
        </button>
    )
};

BackButton.propTypes = {
    onBack: PropTypes.func.isRequired
};

export default BackButton;