import Image from 'next/image';
import React from 'react';

const FlagImage = ({ country, size = 'md' }) => {
  const sizes = {
    sm: 30,
    md: 50,
    lg: 70,
  };

  const pixelSize = sizes[size];

  return (
    <Image
      src={`/images/${country}.png`}
      alt={country}
      width={pixelSize}
      height={pixelSize}
    />
  );
};

export default FlagImage;
