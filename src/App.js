import React, { useState } from 'react';
import './App.css';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? 'dropdown active' : 'dropdown'} onClick={() => setIsOpen(!isOpen)}>
      <div className="dropdown__text">Click me</div>
      <div className="dropdown__items">
        <div className="dropdown__item">item</div>
        <div className="dropdown__item">item</div>
        <div className="dropdown__item">item</div>
        <div className="dropdown__item">item</div>
        <div className="dropdown__item">item</div>
        <div className="dropdown__item">
          <button>Connect</button>
        </div>

      </div>
    </div>
  );
};

export default App;
