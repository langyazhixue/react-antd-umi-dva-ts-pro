import React from 'react';
import style from './index.less';
import yay from '@/assets/yay.jpg'


// 函数也是jsx合法表达式
const user = {
  firstName: 'tom',
  lastName:'jerry'
}

function formatName(user) {
  return user.firstName + " " + user.lastName
}

// 数组
// 数组会被作为一组子元素对待，数组中存放一组jsx可用于显示列表数据
const arr = [1, 2, 3].map(num => {
  return (
    <li key = {num}>{num}</li>
  )
})

// 图片的使用
// 属性:静态值双引号，动态值用花括号;class、for 等要特殊处
// css模块化，创建index.module.css, index.js
// JSX => React.createElement(...)
// 函数组件通常 状态，仅关注内容展示，返回渲染结果即可。
export default function() {
  return (
    <div>
      <h2>{ formatName(user) }</h2>
      <h2>{ arr }</h2>
      <img  className = { style.img} src={yay} alt="" style={{width:100}}/>
    </div>
    // <div className={'test'}>
    //   login
    // </div>
  )
}
