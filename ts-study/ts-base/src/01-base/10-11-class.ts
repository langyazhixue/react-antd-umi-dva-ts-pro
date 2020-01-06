
// public: 类的所有属性默认都是public
// private : 类的私有成员，只能被类自己调用，不能被类的实例用，不能被继承
// protected: 受保护成员 只能在类或者子类中访问
// readonly: 只读属性,只读属性一定要被初始化
// 构造函数参数也可以添加修饰符，参数自动可以变成实例的属性
// static: 静态成员, 只能通过类名来调用 不能通过子类来调用

class Dog77 {
  // 为构造参数增加了类型注解
  // 构造函数的返回值会自动推断为这个类的本身 Dog
  // private这个类不能被实例化，也不能被继承 
  // private constructor(name: string) {
  //   this.name= name
  // }
   constructor(name: string) {
    this.name = name
  }
  // 为成员属性添加了类型注解,也可以给一个基本值
  public name? : string = 'dog'
  readonly legs : number = 5 // 只读属性一定要被初始化
  run(){
    this.pri()
  }
  private pri(){}
  protected pro () {}
  static food : string = 'bones'
}

console.log(Dog77.prototype) // 不包含成员属性

let dog77 = new Dog77('wangwang')

console.log(dog77)
// dog.pri()
// 继承

class Husky extends Dog77 {
  // 构造函数参数也可以添加修饰符，参数自动可以变成实例的属性
  constructor(name:string, public color: string) {
    super(name)
    // this.color = color
    this.pro()
  }
  // color: string
}

const husky = new Husky('wangwang','yellow')
console.log(husky) // color; yellow