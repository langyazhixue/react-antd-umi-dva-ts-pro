import React, { Component } from 'react';
import { MyProvider, themes} from '../context'
// Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。

import ThemedButton from '../themed-button';


// 一个使用 ThemedButton 的中间组件


function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}


class contextTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }
  render() {
    return (
      <div>
         <MyProvider value={this.state.theme}>
            <Toolbar changeTheme={this.toggleTheme} />
        </MyProvider>
        <div>
          <ThemedButton />
        </div>
      </div>
    );
  }
}


// class Child1 extends Component {
//   render(){
//     return(
//       <Child2/>
//     )
//   }
// }

// class Child2 extends Component {
//   render(){
//     return(
//       <h2>{this.props.name}</h2>
//     )
//   }
// }
export default contextTest;
