import React, { useRef, useEffect } from 'react';

export const Timer = () => {
  const timeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const updateTime = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    if (timeRef.current) {
      timeRef.current.textContent = `${day}-${month}-${year} : ${hours}:${minutes}:${seconds}`;
    }
  };

  return (
    <div>
      <h2>Timer: <span ref={timeRef}>Loading...</span></h2>
    </div>
  );
};

export default Timer;
