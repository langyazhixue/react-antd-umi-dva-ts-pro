
// 类与接口的关系
// 接口只能约束类的共有成员
interface Human {
  name: string;
  eat():void
}

class Asian implements Human {
  constructor(name:string) {
    this.name = name
  }
  name: string
  eat(){}
  sleep(){}
}

// 接口可以相互继承，一个接口可以继承多个接口
// 接口的继承可以抽离出可重用的接口，多个接口可以
interface Man extends Human {
  run():void
}

interface Child {
  cry(): void
}


interface Boy extends Man,Child {

}

let boy: Boy = {
  name : '',
  run(){},
  eat(){},
  cry(){}
}











// 接口可以继承类
class Auto {
  state = 1
  // private state2 = 0
}

interface AutoInterface extends Auto {

}

class MyC implements AutoInterface {
  state = 1
}


// 
class Bus extends Auto implements AutoInterface {

}