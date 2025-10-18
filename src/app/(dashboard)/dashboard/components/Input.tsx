"use client"

import React from 'react';
import styled from 'styled-components';

const Input = ({ label = "", type = "text", ...props }) => {
  return (
    <StyledWrapper>
      <div className="group">
        <input required type={type} className="input" {...props} />
        <span className="highlight" />
        <span className="bar" />
        <label>{label}</label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .group {
   position: relative;
  }

  .input {
   font-size: 14px;
   padding: 8px 8px 8px 5px;
   display: block;
   width: 100%;
   max-width: 280px;
   border: none;
   border-bottom: 1px solid #515151;
   background: transparent;
   color: #262626;
  }

  .input:focus {
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

  .input:focus ~ label, .input:valid ~ label {
   top: -18px;
   font-size: 12px;
   color: #fb2c36;
  }

  .bar {
   position: relative;
   display: block;
   width: 100%;
   max-width: 280px;
  }

  .bar:before, .bar:after {
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

  .input:focus ~ .bar:before, .input:focus ~ .bar:after {
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

  .input:focus ~ .highlight {
   animation: inputHighlighter 0.3s ease;
  }

  @keyframes inputHighlighter {
   from {
    background: #fb2c36;
   }

   to {
    width: 0;
    background: transparent;
   }
  }

  @media (min-width: 768px) {
   .input {
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    max-width: 320px;
   }

   label {
    font-size: 16px;
    top: 10px;
   }

   .input:focus ~ label, .input:valid ~ label {
    top: -20px;
    font-size: 14px;
   }

   .bar {
    max-width: 320px;
   }
  }
`;

export default Input;