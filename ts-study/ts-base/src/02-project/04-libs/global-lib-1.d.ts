
// 如何在ts中引入外部类库
// 类库的声明文件
//  declare 可以为一个外部变量提供类型声明
declare function globalLib(options: globalLib.Options): void;

declare namespace globalLib {
    const version: string;
    function doSomething(): void;
    interface Options {
        // 可索引类型接口
        [key: string]: any
    }
}
