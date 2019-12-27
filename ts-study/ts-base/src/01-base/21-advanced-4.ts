// 条件类型
// <> 泛型就是用一个东西表示广泛的类型。
// T extends U ? x : y
// 条件类型使得类型不具有唯一性
// 也增加了语言灵活性
type TypeName<T> = 
T extends string ? 'string':
T extends number ? 'number':
T extends boolean ? 'boolean':
T extends undefined ? 'undefined':
"object"

type T1 = TypeName<string>
type T2 = TypeName<number>

// 分布式条件类型
// (A | B) extends U ? X : Y , 结果类型会变成多个类型的条件类型
// (A ) extends U ? X : Y | (B) extends U ? X : Y

type T3 = TypeName<string | string[]>

// 帮助我们进行类型过滤,从类型T中过滤掉可以赋值给类型U的类型
type Diff<T,U> = T extends U ? never:T

type T4 = Diff<'a'| 'b'|'c', 'a'| 'e'>

//  
// Diff<'a','a'| 'e'>, Diff<'b','a'| 'e'>  Diff<'c','a'| 'e'>

// never | "b" | 'c'

// 'b'|'c'

type NotNUll<T> = Diff<T, undefined|null>
type T5 = NotNUll<string| number | undefined | null>  //  可以过滤掉 undefiend null

// Exclude<T,U> == Diff (官方的内置类型)
// NonNullable<T>
// Extract<T, U> 跟 Exclude 相反

type T6 = Extract<'a'| 'b' |'c', 'a'| 'e'>

// ReturnType<T>可以获取一个函数返回值的类型

type T7 = ReturnType<() => string>