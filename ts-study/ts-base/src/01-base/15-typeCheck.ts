import { number } from "_@types_prop-types@15.7.3@@types/prop-types";

// 类型检查机制

// TS 编译器在做类型检查时候，所秉承的一些原则，以及表现出的一些行为
// 作用：辅助开发，提高开发效率

// 1. 类型推断
// 2. 类型兼容性
// 3. 类型保护

// 1. 类型推断
// 不需要指定变量的类型(函数的返回值类型)， TS可以根据某些规则自动地为其推断出一个类型
// 1. 基础类型推断
// 2. 最佳通用类型推断
// 3. 上下文类型推断

// 1. 基础类型推断

let a = 1 

let b = [1, null]

let c = (x =1) => {
  return x
}

// 2. 上下文类型推断（从右到左）

window.onkeydown = (e:any) => {
  // 键盘事件的属性
  console.log(event.target)
}

interface Foo {
  bar: number
}

let foo:Foo =  {
  bar:1
}






