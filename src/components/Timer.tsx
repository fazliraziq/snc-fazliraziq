import React, { useState, useEffect } from 'react';

export const Timer = () => {
  const [time, setTime] = useState('Loading...');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getFormattedTime() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    return `${day}-${month}-${year} : ${hours}:${minutes}:${seconds}`;
  }

  return (
    <div>
      <h2>Timer: {time}</h2>
    </div>
  );
};

export default Timer;
