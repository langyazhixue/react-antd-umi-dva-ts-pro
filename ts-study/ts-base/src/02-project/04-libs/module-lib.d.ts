declare function moduleLib(options: Options): void

interface Options {
    [key: string]: any
}

declare namespace moduleLib {
    const version: string
    function doSomething(): void
}
// 通过 export 关键字导出
export = moduleLib
