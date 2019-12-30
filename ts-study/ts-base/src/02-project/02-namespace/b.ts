// 这种情况解决方法也很简单，就是告诉编译器我们的类的依赖关系
/// <reference path="a.ts" />
// <reference types="sizzle" /> types 说明是模块依赖
// namespace 中的局部变量外界是无法访问的, 可以配合 export 关键字公开其访问级别.
namespace Shape {
    export function square1(x: number) {
        return x * x
    }
}

console.log(Shape.cricle(2))
console.log(Shape.square1(2))

import cricle = Shape.cricle
console.log(cricle(2))
