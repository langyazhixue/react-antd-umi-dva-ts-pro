import React from 'react';
// import styles from './index.less';
import yay from '@/assets/yay.jpg'
// 函数表达式
const user = {
  firstName: 'tom',
  lastName:'jerry'
}

function formatName(user) {
  return user.firstName + " " + user.lastName
}

// 数组

const arr = [1, 2, 3].map(num => {
  return (
    <li key = {num}>{num}</li>
  )
})

// 图片的使用

export default function() {
  return (
    <div>
      <h2>{ formatName(user) }</h2>
      <h2>{ arr }</h2>
      <img src={yay} alt=""/>
    </div>

    // <div className={'test'}>
    //   login
    // </div>
  )
}
