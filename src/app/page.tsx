"use client";

import { useState, CSSProperties } from 'react';

export default function Home() {
  const [username, setUsername] = useState('Username');
  const [color1, setColor1] = useState('#00fff3');
  const [color2, setColor2] = useState('#ffffff');
  const [isHovered, setIsHovered] = useState(false);

  const usernameStyle = {
    '--custom-gradient-color-1': color1,
    '--custom-gradient-color-2': color2,
    '--custom-gradient-color-3': color1, // Color 3 is the same as Color 1
  } as CSSProperties;

  const handleColor1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor1(e.target.value);
  };

  const handleColor2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor2(e.target.value);
  };

  return (
    <div className="container">
      <h1>Discord Enhanced Role Styles</h1>
      <div className="preview-box">
        <span
          id="username-preview"
          className={`username-gradient ${isHovered ? 'force-hover' : ''}`}
          style={usernameStyle}
          data-text={username}
        >
          {username}
        </span>
      </div>
      <div className="controls">
        <div className="control-group">
          <label htmlFor="username-input">Username</label>
          <input
            type="text"
            id="username-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="control-group">
          <label htmlFor="color-1">Gradient Color 1</label>
          <div className="color-input-wrapper">
            <input
              type="color"
              id="color-1"
              value={color1}
              onChange={handleColor1Change}
            />
            <input
              type="text"
              id="color-1-text"
              className="color-text-input"
              value={color1}
              onChange={handleColor1Change}
            />
          </div>
        </div>
        <div className="control-group">
          <label htmlFor="color-2">Gradient Color 2</label>
          <div className="color-input-wrapper">
            <input
              type="color"
              id="color-2"
              value={color2}
              onChange={handleColor2Change}
            />
            <input
              type="text"
              id="color-2-text"
              className="color-text-input"
              value={color2}
              onChange={handleColor2Change}
            />
          </div>
        </div>
        <div className="control-group">
          <label htmlFor="hover-toggle">Preview Hover State</label>
          <input
            type="checkbox"
            id="hover-toggle"
            checked={isHovered}
            onChange={(e) => setIsHovered(e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
}
