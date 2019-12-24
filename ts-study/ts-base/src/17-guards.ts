// 类型保护

// TS 能够在特定的区块中保证变量属于某种确定的类型
// 可以在词区块中方向的引用此类型的属性，或者调用此类型的方法
enum Type {
  Strong,
  Week
}

class Java {
  helloJava(){
    console.log('hello java')
  }
  java: any
}

class JavaScript {
  helloJavaScript() {
    console.log('hello javascript')
  }
  javascript:any
}

function isJava(lang:Java|JavaScript ) : lang is Java{
  return (lang as Java).helloJava  !== undefined
}

// lang as Java 类型断言
function getLang(type: Type, x:string | number) {
  let lang = type === Type.Strong ? new Java(): new JavaScript()
  // if((lang as Java).helloJava) {
  //   (lang as Java).helloJava()
  // } else if((lang as JavaScript) .helloJavaScript) {
  //   (lang as JavaScript).helloJavaScript()
  // }

  // instanceof 创建了类型保护区块

  if(lang instanceof Java) {
    lang.helloJava()
  } else {
    lang.helloJavaScript()
  }
  // in 判断某个属性是不是属于某个对象

  if( 'java' in lang) {
    lang.helloJava()
  } else {
    lang.helloJavaScript()
  }

  // typeof 帮助判断基本类型
  if(typeof x === 'string') {
    x.length
  } else {
    x.toFixed()
  }

  // 创建一个类型保护函数

  if(isJava(lang)) {
    lang.helloJava()
  } else {
    lang.helloJavaScript()
  }
  return lang
}


getLang(Type.Strong,1)

