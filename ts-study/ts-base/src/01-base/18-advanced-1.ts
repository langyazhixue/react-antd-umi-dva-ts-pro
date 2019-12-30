// ts 高级类型：交叉类型与联合类型
// 交叉类型：将所有类型合并为一个类型，新的类型具有所有特性，交叉类型特别适合对象混入的场景
interface DogInterface {
  run():void
}

interface CatInterface {
  jump():void
}

// 交叉类型用 & 符来链接 取并集
let pet: DogInterface & CatInterface =  {
  run() {

  },
  jump(){

  }
}

//  联合类型 类型不确定的时候用

let a_a: number | string = 'a'

// 字面量类型
// b 的取值只能是'a'| 'b' | 'c'
let b_a: 'a'| 'b' | 'c' = 'c'

let c_c: 1 | 2 | 3 = 3


class Dog_a implements DogInterface {
  run(){}
  eat(){}
}

class Cat_a implements CatInterface {
  jump(){}
  eat(){}
}
// 数字枚举类型
enum Master {
  Boy,
  Girl
}

function getPet(master:Master) {
  let pet = master === Master.Boy ? new Dog_a() : new Cat_a()
  pet.eat() // 只能访问交集
  return pet
}

// 可区分的联合类型，一个类型是多个类型的联合类型，并且又一个公共的属性，那么就可以凭借这个公共属性，创建类型保护区块

interface Square {
  kind: 'square';
  size: number
}

interface Rectangle {
  kind: 'rectangle';
  with:number;
  height:number
}

interface Circle {
  kind:'circle';
  r:number
}
type Shape = Square | Rectangle | Circle

function area (s:Shape):number {
  switch(s.kind) {
    case 'square':
      return s.size * s.size
    case 'rectangle':
      return s.height * s.with
    case 'circle':
      return Math.PI * s.r **2 
    default:
      return ((e:never) => {
        throw new Error(e)
      })(s)
  }
}
// never 
console.log(area({
  kind: 'circle',
  r: 1
}))
