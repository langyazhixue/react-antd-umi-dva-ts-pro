import React, { useState, useEffect } from 'react';

export default function HookSTest() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => {
      // console.log(date)
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [date]);
  return <div>{date.toLocaleTimeString()}</div>;
}
