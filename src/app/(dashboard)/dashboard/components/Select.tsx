import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Select = ({ label = "Municipality", value = "", onChange, ...props }: { label?: string, value?: string, onChange?: (value: string) => void, [key: string]: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const municipalities = [
    "Sincelejo",
    "Buenavista",
    "Caimito",
    "Chalán",
    "Colosó",
    "Corozal",
    "Coveñas",
    "El Roble",
    "Galeras",
    "Guaranda",
    "La Unión",
    "Los Palmitos",
    "Majagual",
    "Morroa",
    "Ovejas",
    "Palmito",
    "Sampués",
    "San Benito Abad",
    "San Juan de Betulia",
    "San Marcos",
    "San Onofre",
    "San Pedro",
    "Sincé",
    "Sucre",
    "Tolú",
    "Toluviejo"
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && event.target && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (municipality: string) => {
    setSelectedValue(municipality);
    setIsOpen(false);
    if (onChange) {
      onChange(municipality);
    }
  };

  return (
    <StyledWrapper ref={wrapperRef}>
      <div className="group">
        <div 
          className={`select-input ${selectedValue ? 'has-value' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          {...props}
        >
          {selectedValue || ''}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className='w-5 h-5'><path d="M300.3 440.8C312.9 451 331.4 450.3 343.1 438.6L471.1 310.6C480.3 301.4 483 287.7 478 275.7C473 263.7 461.4 256 448.5 256L192.5 256C179.6 256 167.9 263.8 162.9 275.8C157.9 287.8 160.7 301.5 169.9 310.6L297.9 438.6L300.3 440.8z"/></svg>
        </div>
        <span className="highlight" />
        <span className="bar" />
        <label className={selectedValue ? 'active' : ''}>{label}</label>
        
        {isOpen && (
          <div className="dropdown">
            {municipalities.map((municipality) => (
              <div
                key={municipality}
                className={`option ${selectedValue === municipality ? 'selected' : ''}`}
                onClick={() => handleSelect(municipality)}
              >
                {municipality}
              </div>
            ))}
          </div>
        )}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .group {
    position: relative;
  }

  .select-input {
    font-size: 14px;
    padding: 8px 8px 8px 5px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: 176.6px;
    max-width: 280px;
    border: none;
    border-bottom: 1px solid #515151;
    background: transparent;
    cursor: pointer;
    min-height: 46.8px;
    color: #333;
    transition: transform 0.2s ease;
  }

  .select-input:active {
    transform: translateY(0);
  }

  .select-input:focus {
    outline: none;
  }

  label {
    color: #999;
    font-size: 14px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 8px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .select-input.has-value{
    justify-content: space-between;
    color:#262626;
  }

  .select-input.has-value ~ label,
  label.active {
    top: -1px;
    font-size: 12px;
    color: #fb2c36;
  }

  .bar {
    margin-top: 2px;
    position: relative;
    display: block;
    width: 100%;
    max-width: 280px;
  }

  .bar:before,
  .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #fb2c36;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .bar:before {
    left: 50%;
  }

  .bar:after {
    right: 50%;
  }

  .group:focus-within .bar:before,
  .group:focus-within .bar:after {
    width: 50%;
  }

  .highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-width: 280px;
    max-height: 200px;
    overflow-y: scroll;
    overflow-x: hidden;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    margin-top: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    animation: slideDown 0.3s ease-out;
    transform-origin: top;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px) scaleY(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scaleY(1);
    }
  }

  .dropdown::-webkit-scrollbar {
    width: 8px;
  }

  .dropdown::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  .dropdown::-webkit-scrollbar-thumb {
    background: #fb2c36;
    border-radius: 4px;
  }

  .dropdown::-webkit-scrollbar-thumb:hover {
    background: #e02831;
  }

  .option {
    padding: 10px 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 14px;
    animation: fadeIn 0.3s ease-out backwards;
  }

  .option:nth-child(1) { animation-delay: 0.05s; }
  .option:nth-child(2) { animation-delay: 0.08s; }
  .option:nth-child(3) { animation-delay: 0.11s; }
  .option:nth-child(4) { animation-delay: 0.14s; }
  .option:nth-child(5) { animation-delay: 0.17s; }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .option:hover {
    background-color: #f5f5f5;
    transform: translateX(4px);
  }

  .option.selected {
    background-color: #fb2c36;
    color: white;
  }

  .option.selected:hover {
    background-color: #e02831;
  }

  @media (min-width: 768px) {
    .select-input {
      font-size: 16px;
      padding: 10px 10px 10px 5px;
      max-width: 320px;
      height: 37.8px;
    }

    label {
      font-size: 16px;
      top: 10px;
    }

    .select-input.has-value ~ label,
    label.active {
      top: -20px;
      font-size: 14px;
    }

    .bar {
      max-width: 320px;
    }

    .dropdown {
      max-width: 320px;
    }

    .option {
      padding: 12px 14px;
      font-size: 16px;
    }
  }
`;

export default Select;