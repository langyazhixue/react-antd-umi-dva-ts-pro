import React, { useState, useEffect } from 'react';

export default function HookSTest(props) {
  console.log(props)
  const [date, setDate] = useState(new Date());
  // 可以是多个useEffect
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
