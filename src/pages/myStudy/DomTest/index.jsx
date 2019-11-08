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
//  onChange 事件与预期行为一致：每当表单字段变化时，该事件都会被触发。我们故意没有使用浏览器已有的默认行为，
// 是因为 onChange 在浏览器中的行为和名称不对应，并且 React 依靠了该事件实时处理用户输入

// 7. selected
// <option> 组件支持 selected 属性。你可以使用该属性设置组件是否被选择。这对构建受控组件很有帮助

// 8 style
// React 会自动添加 ”px” 后缀到内联样式为数字的属性后

// 9. value
// <input> 和 <textarea> 组件支持 value 属性。你可以使用它为组件设置 value。
// </textarea>/这对于构建受控组件是非常有帮助。defaultValue 属性对应的是非受控组件的属性，用于设置组件第一次挂载时的 value。

// 9. 在 React 16 中，任何标准的或自定义的DOM 属性都是完全支持的。
// React 为 DOM 提供了一套以JS 为中心的API。
// 由于React组件经常采用自定义或者DOM相关的 props 的关系，React 采用了小驼峰命名的方式，正如 DOM APIs 那样：

function createMarkup() {
  return { __html: 'First &middot; Second' };
}

const divStyle = {
  color: 'blue',
  backgroundColor: 'red',
};
class DOMTest extends Component {
  render() {
    return (
      <div>
        <h2>DOM 元素</h2>
        <div dangerouslySetInnerHTML={createMarkup()} style={divStyle}></div>
        {/* Just like node.tabIndex DOM API */}
        <div tabIndex="-1" />
        <div className="Button" />
        <input readOnly={true} value='11' />
      </div>
    );
  }
}

export default DOMTest;
