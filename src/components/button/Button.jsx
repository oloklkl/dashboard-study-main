'use client';

import React from 'react';
import styled from 'styled-components';

const Button = ({ children, gray, className }) => {
  return <button className={` text-white px-5 py-1 rounded hover:bg-secondary ${gray ? 'bg-gray-500' : 'bg-primary'} ${className}`}>{children}</button>;
};

export const ButtonIcon = ({ children, className, blind }) => {
  return (
    <button className={`flex justify-center items-center rounded ${className}`}>
      {children}
      <span className='blind'>{blind}</span>
    </button>
  );
};

// const ButtonStyled = styled.button`
//   &::before {
//     content: '🚀 ';
//   }
// `;

export default Button;