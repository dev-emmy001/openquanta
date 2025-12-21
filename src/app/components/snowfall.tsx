"use client";
import Snowfall from 'react-snowfall';

const SnowfallEffect = () => {
  const style = {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: 50, 
    pointerEvents: 'none', 
  };

  return (
    <div>
      <Snowfall
        // color="red"
        snowflakeCount={80}
      />
    </div>
  );
};

export default SnowfallEffect;
