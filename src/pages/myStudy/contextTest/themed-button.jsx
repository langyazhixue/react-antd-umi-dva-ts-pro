import React, { Component } from 'react';
import { MyConsumer,MyContext } from './context';
// 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。
// 这能让你使用 this.context 来消费最近 Context 上的那个值
// MyConsumer 可以用在 函数式组件上
// static contextType = MyContext 可以直接用在Class组件上
import style from './index.less';
function ThemedToggleButton(props) {
  console.log(props);
  return (
    <MyConsumer>
      {({ theme, toggleTheme }) => (
        <div>
          <button
            onClick={toggleTheme}
            style={{ height: '100px', backgroundColor: theme.background }}
          >
            Toggle Theme
          </button>
          <div className={style.boxContainer}>
            <h1>后代都可以拿到</h1>
            <Child1 />
          </div>
        </div>
      )}
    </MyConsumer>
  );
}

class Child1 extends Component {
  static contextType = MyContext
  render() {
    console.group('Child1');
    console.log(this.context)
    return (
      <div className={style.child1}>
        <h2>child1</h2>
        <Child2/>
      </div>
    );
  }
}

function Child3Fun (props) {
  return (
    <MyConsumer>
      {
        ({ theme, toggleTheme }) => (
          <Child3 {...props} theme={theme} toggleTheme={toggleTheme} />
        )
      }
    </MyConsumer>
  )
}

class Child3 extends Component {
  render() {
    console.group('Child3');
    console.log(this.props)
    return <div className={style.child3}>child3</div>
  }
}

class Child2 extends Component {
  render() {
    console.group('Child2');
    console.log(this.context);
    return (
      <div className={style.child2}>
        <h2>Child2</h2>
        <Child3Fun id='222'/>
      </div>
    )
  }
}

export default ThemedToggleButton;
