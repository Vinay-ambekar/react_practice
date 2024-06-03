import  { useState, useEffect } from 'react';

const MyTimer = () => {
  // Calculate the initial total seconds from the given number of days
  const initialTotalSeconds = 24 * 24 * 60 * 60;

  // State to hold the total seconds remaining
  const [totalSeconds, setTotalSeconds] = useState(initialTotalSeconds);

  useEffect(() => {
    // Function to update the timer every second
    const countdown = setInterval(() => {
      setTotalSeconds((prevTotalSeconds) => {
        if (prevTotalSeconds <= 0) {
          clearInterval(countdown);
          return 0;
        }
        return prevTotalSeconds - 1;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(countdown);
  }, []);

  // Calculate days, hours, minutes, and seconds from total seconds
  const daysRemaining = Math.floor(totalSeconds / (24 * 60 * 60));
  const hoursRemaining = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutesRemaining = Math.floor((totalSeconds % (60 * 60)) / 60);
  const secondsRemaining = totalSeconds % 60;

  // Helper function to pad numbers with leading zeros
  const padNumber = (num) => {
    return String(num).padStart(2, '0');
  };

  // Pad the numbers
  const paddedDays = padNumber(daysRemaining);
  const paddedHours = padNumber(hoursRemaining);
  const paddedMinutes = padNumber(minutesRemaining);
  const paddedSeconds = padNumber(secondsRemaining);

  return (
    <div>
      <h1>Reverse counter Timer</h1>
      <div className='fs-1 fw-medium text-success'>
        <span >{paddedDays[0]}</span>
        <span >{paddedDays[1]}</span>:
        <span>{paddedHours[0]}</span>
        <span>{paddedHours[1]}</span>:
        <span>{paddedMinutes[0]}</span>
        <span>{paddedMinutes[1]}</span>:
        <span>{paddedSeconds[0]}</span>
        <span>{paddedSeconds[1]}</span>
      </div>
    </div>
  );
};

export default MyTimer;
