import React from 'react';
import './css/SwitchTheme.css';

function SwitchTheme() {
  return (
    <label className="switch leftTop">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
}

export default SwitchTheme;
