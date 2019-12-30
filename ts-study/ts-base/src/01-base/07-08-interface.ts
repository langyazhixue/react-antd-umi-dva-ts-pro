interface List {
  [x:string]: any;  //字符串索引签名，用任意的x索引签名
  readonly id: number;  // 只读属性
  name: string;
  age?:number  //表示age 这个属性是可选的
}
// 允许后端传回来其他的数据
// 
// data 是一个数组
// 一只鸟看起来像鸭子，游起来像鸭子，叫起来像鸭子，它就可以被称为是鸭子，只要传入的对象满足接口的必要条件
interface Result {
  data: List[]
}

function render(result:Result) {
  result.data.forEach(v => {
    console.log(v.id,v.name)
  })
}

let result = {
  data: [
    {
      id:1,
      name:'S',
      sex:'male'
    },
    {
      id: 2,
      name:'B'
    }
  ]
}

// render(result)
//  as Result 类型断言
render({
  data:[
    {
      id: 1,
      name: 'A',
      sex:'ff',
      age:11
    }
  ]
} as Result)
// 类型断言2

render(<Result>{
  data:[
    {
      id: 1,
      name: 'A',
      sex:'ff'
    }
  ]
})



// 定义一个可索引的接口
// 1. 用数字来索引一个接口，一般是数组
interface StringArray {
  [index: number] : string
}

let cahrs: StringArray = ['A','B']

// 2.  用字符串来索引一个接口, 数字索引签名的返回值要是字符串索引签名的返回值的子类型
interface Names {
  [x:string] : string,
  [z: number]: string,
  y: string
}

interface Res {
  data: Names[]
}

// 函数接口类型
// let add: (x:number, y: number) => number

// 用接口的方式定义一个函数
// interface Add {
//   (x:number, y:number):number
// }



// 类型别名

type Add = (x: number, y:number) => number

let add1: Add = (a, b) => a + b

console.log(add1(1,2))

// 混合类型接口
interface Lib {
  (): void;
  version: string;
  doSomething():void
}

function getLib() {
  let lib = (() => {}) as Lib
  lib.version = '1.0'
  lib.doSomething = () => {
    console.log('getLib')
  }
  return lib
}

let lib1 = getLib()

lib1()

lib1.doSomething()

