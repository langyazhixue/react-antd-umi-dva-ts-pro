// 自定义Hook
// 独立出来的 Hook
// 开头必须用use
import  { useState, useEffect } from 'react';

function useMyCounter(initailValue) {
  const [myCounter, setMyCounter] = useState(initailValue);
  useEffect(() => {
    // const timerId = setInterval(() => {
    //   console.log('counter:update')
    // }, 1000);
    document.title = `You clicked ${myCounter} times`;
    console.log('counter:update');
    // return 是在 componentWillUnmount 要做的操作
    return () => {
      // clearInterval(timerId);
    };
    // [counter] 是说明在counter改变的额时候才执行
  }, [myCounter]);

  return [
    myCounter,
    setMyCounter,
  ]
}

export default useMyCounter