import React, { Component } from 'react';
import { MyProvider,themes } from './context.js';
// 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。
// 这能让你使用 this.context 来消费最近 Context 上的那个值
import ThemedToggleButton from './themed-button'

function Content() {
  return (
    <div>
      <ThemedToggleButton id='1'/>
    </div>
  );
}

class ContextTest extends Component{
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    // State 也包含了更新函数，因此它会被传递进 context provider。
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // 整个 state 都被传递进 provider
    return (
      <MyProvider value={this.state}>
        <Content />
      </MyProvider>
    );
  }
}

export default ContextTest
