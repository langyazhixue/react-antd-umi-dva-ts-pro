import React, { Component } from 'react';

// 在 React 里，HTML 表单元素的工作方式和其他的 DOM 元素有些不同，这是因为表单元素通常会保持一些内部的 state。例如这个纯 HTML 表单只接受一个名称

// 此表单具有默认的 HTML 表单行为，即在用户提交表单后浏览到新页面。如果你在 React 中执行相同的代码，它依然有效。
// 但大多数情况下，使用 JavaScript 函数可以很方便的处理表单的提交， 同时还可以访问用户填写的表单数据。实现这种效果的标准方式是使用“受控组件”。

// 什么是受控组件

// 在HTML 中，表单元素(如<input><textarea><select>) 之类的表单元素通常自己维护 state，并根据用户输入进行更新。
// 而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 setState()来更新。

// 我们可以把两者结合起来，使 React 的 state 成为“唯一数据源”。
// 渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

import UnControlledForm from './unControlled'
class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isGoing:true
    };
  }
  handleChange = event => {
    const newValue = event.target.value;
    this.setState(state => {
      return {
        value: newValue,
      };
    });
  };

  handleCheckboxChange = (event) =>{
    const target = event.target
    this.setState({
      isGoing: target.checked
    })
  }
  handleSubmit = event => {
    alert('提交的名字：' + this.state.value);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              名字:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
          </div>

          <div>
            <label>
              参与:
              <input  name='isGoing'  checked={this.state.isGoing} type="checkbox"  onChange={this.handleCheckboxChange} />
            </label>
           
          </div>
          <input type="submit" value="提交" />
        </form>
        <UnControlledForm/>
      </div>
    );
  }
}

export default NameForm;
