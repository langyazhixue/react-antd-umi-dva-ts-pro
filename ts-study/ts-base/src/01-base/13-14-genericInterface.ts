
// interface 与 type 区别
// interface只能定义对象类型，type声明的方式可以定义组合类型，交叉类型和原始类型
// interface方式可以实现接口的extends/implements，而type不行
// interface可以实现接口的merge，但是type不行

// 泛型函数与泛型接口
// 一个函数或者一个类可以支持多种数据类型

// function log(value:string):string {
//   console.log(value)
//   return value
// }

// 联合类型

// function log(value: string | string[]) : string | string[] {
//   console.log(value)
//   return value
// }

// 泛型：不预先确定的数据类型，具体的类型在使用的时候才确定
// 用泛型改造log函数
// T相当于any
function log11<T>(value:T) :T {
  return value
}

// 在调用的时候必须先声名类型
log11<string[]>(['2'])

// 利用推断
log11(['a','b'])


//类型别名
type Log = <T>(value:T) => T

// 实现了一个泛型函数的实现
let myLog:Log = log11

// 2. 泛型接口

// 这种方式跟类型别名的方式是一样的
interface Log1 {
  <T = string>(value:T): T
}

// 打印日志
let myLog1:Log1 = (v) =>v
myLog1(1)

// 接口中所有的成员可以受到泛型变量的约束,可以指定默认类型
interface Log2<T = string> {
  (value:T): T
}

let myLog2:Log2<number> = log11

// 把泛型理解为代表类型的参数


// 2. 泛型类与泛型约束


// 静态成员不能引用类型参数


class Log9<T> {
  run(value: T) {
    console.log(value)
    return value
  }
}

let log99 = new Log9<number>()

log99.run(1)

let log1010 = new Log9()

log1010.run('ff')



// 类型约束
interface Length {
  length: number
}
// T extends Length  给泛型增加约束
// 所以T 就不能随便乱传乱，必须具有length属性
function newLog<T extends Length >(value:T):T {
  console.log(value,value.length) // T 类型上不存在 length 属性
  return value
}

newLog([1])
newLog('123')

// 为什么使用泛型
// 1. 函数和类可以轻松的支持多种类型，增强程序的扩展性
// 2. 不必写多条函数重载，冗长的联合类型声明，增强代码可读性
// 3. 灵活控制类型之间的约束