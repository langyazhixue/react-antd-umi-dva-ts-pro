import React from 'react'
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};
// React中使 Context 实现祖代组件向后代组件跨层级传值。 Vue中的 provide && inject来源于Context
// Consumer :内层获取数据的组件
// Provider: 外层提供数据的组件
//  {theme:themes.dark} 是属于默认值
// 当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。Provider 及其内部 consumer
// 组件都不受制于shouldComponentUpdate函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。
export const MyContext = React.createContext({
  theme:themes.dark,
  toggletheme: () => {}
});
export const MyProvider = MyContext.Provider
export const MyConsumer = MyContext.Consumer

