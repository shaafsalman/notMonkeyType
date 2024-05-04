import React from 'react';

const ErrorCard = ({ errorMessage, onClose }) => {
  return (
    <div className="error-card-overlay">
      <div className="error-card">
        <div className="error-message">{errorMessage}</div>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default ErrorCard;
