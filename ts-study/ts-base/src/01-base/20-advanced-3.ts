// 映射类型，通过映射类型从旧的类型变成新的类型
interface Obj20 {
  a: string;
  b: number;
  c: boolean;
}

// 变成只读
type ReadonlyObj20 = Readonly<Obj20>

// 所有参数变成可选的
type PartialObj2o = Partial<Obj20>

// pick部分参数
type PickObj20 = Pick<Obj20,'a'|'b'>

// 以上3种叫做同态
type RecordObj = Record<'x'| 'y', Obj20>

