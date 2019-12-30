
// 函数相关知识点梳理

function add44(x:number,y:number):number{
  return x + y
}

let add2: (x: number, y:number) => number

// 可以通过type类型来定义，也可以通过接口来定义
type add3 = (x: number, y:number) => number
  // 实现
  let add3C: add3 = (a,b) => a + b
  add3C(1,2)

interface add4 {
  (x:number, y:number) : number,
  [y:string]:any
}
  // 实现
  let add4c:add4 = (a,b) => a + b
  add4c(1,2)

// ts 对函数参数类型



// 可选参数
// 可选参数必须位于可选之后
// 当参数不确定的时候，可以使用剩余参数
function add5(x:number, y?:number) {
  return y ? x + y : x
}

add5(1)

function add6(x:number, y:number, z=0) {
  return x + y + z
}

add6(1,2)


// 剩余参数

function add7(x:number, ...rest: number[]) {
  return x + rest.reduce((pre,next) => {
    return pre + next
  })
}

console.log(add7(1,2,3,4,5))


// 函数重载：两个函数，如果函数名称相同，但是参数类型不同或者参数个数不同，就实现了函数重载
// 要把最容易匹配的函数定义写在最前面
function add8(...rest: number[]):number;
function add8(...rest: string[]):string;

function add8(...rest:any[]):any {
  let first =  rest[0]
  if(typeof first === 'string') {
    return rest.join(',')
  } 
  else  if (typeof first === 'number'){
    return rest.reduce((pre,next) => {
      return pre + next
    })
  }
}

console.log(add8(1,2,3))

console.log(add8('apple','number'))

