// TypeScript  作为 JavaScript的超集，在开发过程中不可避免要引用其他第三方的Javascript的库，虽然通过直接引用可以调用库的类和方法，
// 但是却无法使用TS 诸如类型检查等特性功能。
// 为了解决这个问题，需要将这些库的函数和方法体去掉后只保留导出类型声明，而产生了一个描述JS 库和模块信息的声明文件。
// 通过引用这个声明文件，就可以借用TS的各种特性来使用库文件了

// jQuery(#foo)
//  index.ts(1,1): error TS2304: Cannot find name 'jQuery'

// 这时候，我们需要使用declare 关键字来定义它的类型，帮助TS判断我们传入的类型对不对

// declare var jQuery:(selector:string) => any
// jQuery('#foo)
// declare 定义的类型只会用于编译时的检查，编译结果中会被删除
// 上例的编译结果是
// jQuery('#foo)

// 声明文件
// 声明文件以 .d.ts 为后缀，例如
// runoob.d.ts

// 声明文件或模块的语法格式如下
// declare module Module_Name {
// }

// TS 引入声明文件语法格式：
//  ///<reference path = " runoob.d.ts" />


// 例子
// 以下定义一个第三方库来演示
// 1. CalcThirdPartyJsLib.js 文件代码：
//var Runoob;  
// (function(Runoob) {
//   var Calc = (function () { 
//       function Calc() { 
//       } 
//   })
//   Calc.prototype.doSum = function (limit) {
//       var sum = 0; 

//       for (var i = 0; i <= limit; i++) { 
//           sum = sum + i; 
//       }
//       return sum; 
//   }
//   Runoob.Calc = Calc; 
//   return Calc; 
// })(Runoob || (Runoob = {})); 
// var test = new Runoob.Calc();

// 2. 如果我们想在 TS 中引用上面的代码，则需要设置声明文件 Calc.d.ts

