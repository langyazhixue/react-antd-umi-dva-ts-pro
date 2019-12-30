// 声明合并
interface A {
    x: number;
    // y: string;
    foo(bar: number): number; // 5
    foo(bar: 'a'): string; // 2
}

interface A {
    y: number;
    foo(bar: string): string; // 3
    foo(bar: string[]): string[]; // 4
    foo(bar: 'b'): string; // 1
}

// 2 个 A 可以进行接口合并
// 每个函数会变成函数重载
// 接口有函数参数是字面量的话，声明会提升到最顶端
let a11: A = {
    x: 1,
    y: 2,
    foo(bar: any) {
        return bar
    }
}

// 命名空间跟类一起，相当于给类添加类静态属性
class C {}
namespace C {
    export let state = 1
}

console.log(C.state)

function Lib() {}  // 给函数增加命名空间
namespace Lib {
    export let version = '1.0'
}
console.log(Lib.version)

// 枚举
enum Color111 {
    Red2,
    Yellow3,
    Blue4
}
namespace Color111 {
    export function mix() {}
}
console.log(Color)
