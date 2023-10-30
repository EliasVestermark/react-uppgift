import React from 'react';

const TestImage = (props) => {
  const { imageUrl } = props; // Destructure the imageUrl prop
  return (
    <img src={imageUrl} alt="Test Image" />
  );
}

export default TestImage