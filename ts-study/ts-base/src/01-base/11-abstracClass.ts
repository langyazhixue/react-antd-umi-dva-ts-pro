
// 抽象类只能被继承，不能被实例化
// 抽象方法：可以先定义而不实现
// 多态：所谓多态，就是在父类中定义一个方法，然后在多个子类中自己实现自己的方法，程序运行的时候
abstract class Animal {
  eat(){
    console.log('eat')
  }
  // 抽象方法，可以先定义而不实现
  abstract sleep():void
}

class Rose extends Animal {
  constructor(name:string) {
    super()
    this.name = name
  }
  name: string
  run(){}
  sleep() {
    console.log('f')
  }
}

let rose = new Rose('wangwang')
// dog22.eat()
// dog.sleep()

// 多态

class Cat extends Animal {
  constructor(name:string) {
    super()
    this.name = name
  }
  name: string
  run(){}
  sleep() {
    console.log('fff')
  }
}

let cat = new Cat('cat')

// cat.sleep()

let animals:Animal[] = [rose, cat]

animals.forEach(v => {
  v.sleep()
})

// this 实现链式调用
class WorkFlow {
  step1(){
    return this
  }
  step2(){
    return this
  }
}

let work = new WorkFlow()

work.step1().step2()

class Myflow extends WorkFlow {
  next() {
    return this
  }
} 

new Myflow().next().step1().step2() //工作链条