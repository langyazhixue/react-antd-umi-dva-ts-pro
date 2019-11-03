
import React, { useEffect, useState } from 'react';
// 1. 组件跨层级通信-Context 类似于 Vue 的 
  // 1.1 
  // 1.2

// 2 高阶组件-HOC

// 3 装饰器
// 4  组件复合

// Hooks 
// 1. 复用状态逻辑
// 2.  拆分更小的函数
// 3. 更简洁，更容易立即
// const Context = React.createContext()

// const Provider = Context.Provider
// const Consumer = Context.Consumer

// function Cmp1(props) {
//   return <div>
//     {props.user.name}
//   </div>
// } 

// 高阶组件
// const handerComsumer = Cmp => props => {
//   return (
//     <Consumer>
//     {
//       ctx => <Cmp { ...ctx } {...props}/>
//     }
//   </Consumer>
//   )
// }

// function Child(props) {
//   console.log(props)
//   return (
//     <div>
//       Child
//       <p>{props.user.name}</p>
//   </div>
//   )
// }
// const store = {
//   user: {
//     name:'哪吒'
//   }
// }


// class myChild extends React.Component {
//   render() {
//     return (
//       <h1>fsd</h1>
//     )
//   }
// }
// export default class MyClass extends React.Component {
//   render(){
//     const Foo = handerComsumer(Cmp1)
//     return (
//       <div>
//         <h2>class学习</h2>
//         <Child { ...store }/>

//         <Provider value = {store}>

//           <Consumer>
//             {
//               ctx => <Child { ...ctx }/>
//             }
//           </Consumer>
//           < Foo />
//         </Provider>
//       </div>
//     )
//   }
// }

export default function HooksPage() {
  // const [date, setDate] = useState(new Date())
  const [counter, setCounter ] = useState(0)
  // userEffect(() => {
  //   const timer = setInterval(() => {
  //     setDate(new Date())
  //   },1000)
  //   return () => {
  //     clearInterval(timer)
  //   }
  // },[])

  const handleCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h1>HooksPage</h1>
      <p>{ useClock().toLocaleDateString()}</p>

      <span>{counter}</span>
      <button  onClick = { handleCounter}>增加</button>
    </div>
  )
}
// use开头 Clock
function useClock() {
  const [date, setDate] = useState(new Date())
  
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    },1000)
    return () => {
      clearInterval(timer)
    }
  },[])
  return date
}