import React from 'react';
import MiniState from './MiniState';

const MiniStateGrid = ({ stateData }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
      {stateData.map((item, index) => (
        <MiniState
          key={index}
          {...item}
          // name={item.name}
          // value={item.value}
          // startContent={item.startContent}
          // endContent={item.endContent}
          // growth={item.growth}
        />
      ))}
    </div>
  );
};

export default MiniStateGrid;
