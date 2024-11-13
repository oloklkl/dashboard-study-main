import React from 'react';

const IconBox = ({ children, className }) => {
  return <div className={`rounded-full flex justify-center items-center text-primary text-lg ${className}`}>{children}</div>;
};

export default IconBox;
