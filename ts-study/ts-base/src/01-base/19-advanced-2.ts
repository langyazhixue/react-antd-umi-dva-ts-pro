// 索引类型

let obj2 = {
  a: 1,
  b: 2,
  c: 3
}

// function getValue(obj1: any, keys:string[]) {
//   return keys.map(key => obj1[key])
// }

// console.log(getValue(obj2, ['a','b']))
// console.log(getValue(obj2, ['a','f']))


// keyof T keyof是索引类型查询操作符。假设T是一个类型，那么keyof T产生的类型是T的属性名称字符串字面量类型构成的联合类型
interface Obj3 {
  a:number;
  b:string
}

// key 是 a 和 b 的联合类型

// T[K]
let key: keyof Obj3  = 'a'

let value: Obj3['a']  = 0

type newV = keyof Obj3

// T entends U

// T 跟 K 是泛型变量
// K extends keyof T K 是来自T的所有属性字面量的联合类型
function getValue<T,K extends keyof T>(obj1:T, keys:K[]): T[K][] {
  return keys.map(key => obj1[key])
}
console.log(getValue(obj2,['a','b']))