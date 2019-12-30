declare namespace umdLib {
    const version: string
    function doSomething(): void
}

// 专门为 umd库设计的语句
// umd 库可以通过全局的方式引用
export as namespace umdLib

export = umdLib
