import { ConcatSource } from "_@types_webpack-sources@0.1.5@@types/webpack-sources";

// 枚举 enum

enum Role {
  Reporter = 0, // 还可以自定义
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Reporter) // 0,往后递增

console.log(Role)
// 字符串枚举
 enum Message {
   Success = '恭喜你，成功了',
   Fail = '失败了'
 }

 console.log(Message)

 // 异构枚举，字符串枚举跟数字枚举混合在一起
 enum Answer {
   N,
   Y = 'Yes'
 }

 // 枚举成员的值不能修改

 enum Char {
   a,
   b = Char.a,
   c = 1+ 3,
   d = Math.random(),
   e = '123'.length // 需要被计算的枚举，不会在编译阶段被计算
 }

 // 常量枚举,用 const 声名

 const enum Month {
  Jan,
  Feb,
  Mar
 }

//  console.log(Month)

let month = [Month.Jan,Month.Feb, Month.Mar] // 0 1 2
console.log(month)

// 枚举类型

// 1. 枚举成员没有初始值

enum E {
  a, b
}

// 2.  所有成员都是数字枚举

enum F {
  a = 1,
  b = 2
}

//3. 所有成员都是 字符串枚举


enum G {
  a = 'apple',
  b = 'banana'
}


let e : E = 3  // 可以把任意数子赋值给数字枚举类型，取值可以超出枚举类型的定义
let f: F = 3 

let e1: E.a
let e2: E.b
let e3: E.a

// e1 === e2  
let g1:G = G.a // 字符串类型，取值只能是枚举类型的值
let g2: G.a = G.a // G.a  类型只能是 G.a
