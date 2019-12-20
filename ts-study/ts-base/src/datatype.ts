// 原始类型

let bool: boolean = true
let num: number | undefined | null = 123  // 联合类型
let str: string = 'abc'

// str = 1

// 数组
// 1，类型加上[]
// 2. Array加上<>,<>中是数组中的具体类型
// <number | string> 联合类型
let arr1:number[] = [1,2,3]
let arr2: Array<number | string> = [1,2,3,'ff'] // Array 是 ts 提供的泛型接口

// 元组：元组是特殊的数组，限制了数组元素的类型和个数

let tuple:[number,string] = [0, '1']
tuple.push(2)
console.log(tuple)
// tuple[2] 不能访问

// 函数
// 括号后是函数返回值的类型，可以省略
let add= (x:number, y:number): number=> x + y

// compute是定义的一种函数类型，但是没有实现
let compute:(x:number,y:number) => number
compute = (a, b) => a + b

// 对象

// let obj : object = {
//   x: 1,
//   y: 2
// }

let obj : {
  x:number,
  y:number
} = {
  x: 1,
  y: 2
}


// symbol

let s1: symbol = Symbol()
let s2 = Symbol()

console.log(s1= s2)

// undefined, null 
// undefined, null  在官方文档中，这两个类型是其他类型的子类型

let un: undefined  = undefined
let nu: null = null

num = undefined

// void

let noReturn = () => {}

