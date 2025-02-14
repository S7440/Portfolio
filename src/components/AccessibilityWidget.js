import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCog } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './ThemeToggle';

function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accessibility-widget">
      <button className="widget-toggle" onClick={toggleWidget}>
        {isOpen ? <FontAwesomeIcon icon={faArrowDown} /> : <FontAwesomeIcon icon={faCog} />}
      </button>
      {isOpen && (
        <div className="widget-content">
          <ThemeToggle />
          {/* Add more accessibility options here */}
        </div>
      )}
    </div>
  );
}

export default AccessibilityWidget;