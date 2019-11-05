// const value =  useContext(MyContext)
//  提示：
// useContext(MyContext) 相当于 class 组件中的 static contextType = MyContext 或者 <MyContext.Consumer>。
// 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。
// 当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定

// 当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值。

import React,{ useContext,useState } from 'react';
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  },
};

const ThemeContext = React.createContext({
  theme: themes.light,
  toggle: () => {},
});

function MyUseContext(props) {

const [theme, setTheme] = useState(themes.light)

  const toggleTheme  = () => {
    let t = theme === themes.light ? themes.dark : themes.light
    setTheme(t)
  }
  const ThemeContextValue = {
    theme: theme,
    toggle: () => {
      toggleTheme()
    }
  }
  
  return (
    <ThemeContext.Provider value = {ThemeContextValue}>
      <div>
      <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const { theme, toggle }= useContext(ThemeContext);
  console.group('useContext')
  console.log(theme)
  return (
    <button onClick = { () => toggle() }style={{ background: theme.background, color: theme.foreground,fontSize:'16px' }}>
      I am styled by theme context!
    </button>
  );
}

export default MyUseContext



