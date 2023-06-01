import React from 'react';
import './style.css';

function ApplyButton() {
  const handleApplyNow = () => {
    window.location.assign('https://forms.gle/nw3G6wx4F6AToYUh6');
  };

  return (
    <button onClick={handleApplyNow} className="btn-sm ml-3">
      Apply <img className="y" src="Images/arrow1.png" alt="Arrow" />
    </button>
  );
}

export default ApplyButton;
