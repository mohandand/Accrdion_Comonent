import React, { useState, useRef } from 'react';
import './style.css';

export default function (props) {
  const [height, setHeight] = useState('0px');
  const [arrow, setArrow] = useState('accordion_button');
  let content = useRef(null);

  function toggleConent() {
    setHeight(height === '0px' ? `${content.current.scrollHeight}px` : '0px');
    setArrow(
      height === '0px'
        ? 'accordion_button accordion_button_down'
        : 'accordion_button'
    );
  }

  return (
    <div className="accordion_section">
      <button className={arrow} onClick={toggleConent}>
        {props.title}
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion_content"
      >
        {props.content}
      </div>
    </div>
  );
}
