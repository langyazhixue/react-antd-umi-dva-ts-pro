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

// 帮助我们进行类型过滤
// type Diff<>