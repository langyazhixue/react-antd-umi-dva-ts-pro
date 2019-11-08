import React, { Component } from 'react';
// DOM 元素
// React 实现了一套独立于浏览器的DOM 系统，兼顾了性能和跨浏览器的兼容性
// 1. React中，所有的DOM特性和属性（包括事件处理）都应该是小驼峰命名的方式。
// tabindex => tabIndex
// aria-label => aria-label

// 2. checked 
// 3. className
  // class => className

// 4. dangerouslySetInnerHTML


// 5. htmlFor => for
// 6. onChange 
// onChange 事件与预期行为一致：每当表单字段变化时，该事件都会被触发。我们故意没有使用浏览器已有的默认行为，
// 是因为 onChange 在浏览器中的行为和名称不对应，并且 React 依靠了该事件实时处理用户输入。
function createMarkup() {
  return {__html: 'First &middot; Second'};
}

class DOMTest extends Component {
  render() {
    return (
      <div>
          <h2>DOM 元素</h2>
          <div dangerouslySetInnerHTML={createMarkup()}></div>
      </div>
    );
  }
}

export default DOMTest;
