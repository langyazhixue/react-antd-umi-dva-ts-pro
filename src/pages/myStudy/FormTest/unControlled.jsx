import React, { Component } from 'react';

// 在大多数情况下，我们推荐使用`受控组件` 来处理表单数据。在一个受控组件中，表单数据是由React组件来管理的
// 另一种替代方案是使用非受控组件
// 这时表单数据将交由DOM节点来处理
// 要编写一个非受控组件，而不是为每个状态更新都编写数据处理函数，你可以 使用 ref 来从 DOM 节点中获取表单数据。

// 默认值
// 在 React 渲染生命周期时，表单元素上的 value 将会覆盖 DOM 节点中的值，在非受控组件中，你经常希望 React 能赋予组件一个初始值，但是不去控制后续的更新。
// 在这种情况下, 你可以指定一个 defaultValue 属性，而不是 value。

// 文件输入

class UnControlledForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    // alert('A name was submitted: ' + this.input.current.value);
    console.log(this.fileInput.current.files)
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h2>这是一个非受控组件</h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" defaultValue="Bob" ref={this.input} />
            </label>
            <br />
            <label>
              文件上传:
              <input type="file"ref={this.fileInput}/>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default UnControlledForm;
