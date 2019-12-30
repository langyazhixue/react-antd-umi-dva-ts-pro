

// 类型检查机制
// 类型兼容性

// 当一个类型Y可以被赋值给另一个类型X时，我们就可以说类型X兼容类型Y
// X兼容Y：X(目标类型) = Y(源类型)

// 字符型是兼容null
let s:string = 'a'
s = null 


// 接口兼容性
// 接口之间兼容，成员少的可以兼容多的
interface X {
  a: any;
  b: any;
}

interface Y {
  a: any;
  b: any;
  c: any;
}

// X 类型 兼容 Y 类型
let x1:X = {
  a: 1,
  b: 2
}

let x2: Y = {
  a: 1,
  b: 2,
  c: 3
}

x1 = x2 
// x2 = x1

// 函数兼容性
// 参数多的兼容参数少的
type Handler = (a:number, b: number) => void
function hof(handler:Handler) {
  return handler
}

// 1)参数个数
let hanlder1 = (a:number) => {}
hof(hanlder1)


let hanlder2 = (a:number,b:number,c:number) => {}

// hof(hanlder2) // 不行


// 可选参数和剩余参数
let a___ = (p1:number, p2:number) => {}

let b = (p1:number,p2?:number) => {}

let c = (...args:number[]) => {}

// a = b 
// a = c
// b = c
// b = a

// c = a
c = b

// 2) 参数类型要兼容

let handler3 = (a:string) => {}

interface Point3D {
  x:number;
  y:number;
  z:number
}

interface Point2D {
  x:number;
  y:number;
}

let p3d = (point:Point3D ) => {}
let p2d = (point:Point2D ) => {}

// p3d = p2d // 成员多的兼容成员多的，可以理解为函数参数多的，兼容参数少
// p2d = p3d

//3） 返回值类型
let ff = () => ({name:'Alice'})

let g = () => ({name:'Alice',location:'Beijing'})
ff = g

function overload(a:number,b:number): number //目标函数
function overload(a:string,b:string): string // 目标函数
function overload(a:any,b:any):any {  // 源函数 // 源函数的参数要少于目标函数

}

// 枚举类型
enum Fruit {
  Apple,
  Banana
}

enum Color {
  YellowT,
  RedT
}

//  Fruit.Apple = 0
// 枚举跟数字可以相互兼容
// 枚举之间不能兼容
let fruit: Fruit.Apple = 3
let no:number = Fruit.Apple

// let color:Color.Red = Fruit.Banana

// 类兼容性
// 类兼容性跟接口兼容性很相似

class A_com {
  constructor(p:number,q:number) {
  
  }
  id:number = 1
  private name:string = ''
}

class B_com {
  constructor(p:number) {

  }
  id:number = 2
  private name:string = ''
}
let aa = new A_com(1,2)
console.log(aa)
let bb = new B_com(1)

// aa = bb // 参数多的可以兼容少的，有 private 就可以

// bb = aa

class C_com extends A_com {}

let cc = new C_com(1,2)

cc = aa


// 泛型兼容性

interface Enmty<T> {
  name:T
}

let obj1: Enmty<number> = {
  
  name: 1
}

let obj22: Enmty<string> = {
  name: '11'
}
// 只有类型参数T被接口使用的时候，才会影响泛型的兼容性
// obj1 = obj2 // 

let log1 = <T>(x:T) :T => {
  return x
}

let log2 = <U>(x:U) :U => {
  return x
}

log1 = log2


