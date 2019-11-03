import React, { Component } from 'react';
import { MyContext } from '../context';
// 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。
// 这能让你使用 this.context 来消费最近 Context 上的那个值
class ThemedButton extends Component {
  render() {
    let props = this.props;
    let theme = this.context;
    console.group('themeButton');
    console.log(this.props);
    console.log(this.context);
    return (
      <div>
        <button style={{ height: '100px', backgroundColor: theme.background }} {...props}>
          这是一个颜色受控的按钮
        </button>

        <div>
          <Child1 />
        </div>
      </div>
    );
  }
}

class Child1 extends Component {
  render() {
    return <Child2 />;
  }
}

class Child2 extends Component {
  render() {
    console.group('Child2')
    console.log(this.context)
    return <h2>Child2</h2>;
  }
}

ThemedButton.contextType = MyContext;

export default ThemedButton;
