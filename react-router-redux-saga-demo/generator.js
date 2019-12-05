
function* f(){
  for(var i = 0 ; true; i ++ ) {
    var reset = yield i 
    console.log(reset)
    if(reset) {
      i = -1
    }
  }
}
var g = f()
var res = g.next() // 0 
g.next(res.value) // 把上一次返回的值传递进去

var arr = [1,[1,2,3],[5,6]]
// flat  返回的是一个遍历器对象
var flat = function* (a) {
  var length = a.length
  for (var i = 0 ; i < length; i ++ ) {
    var item = a[i]
    if(typeof item !== 'number') {
      yield * flat(item)
    } else {
        yield item
    } 
  } 
}
for(var ff of flat(arr)) {
  console.log(ff)
}

// 测试yield*
function* inner(){
  yield 'inner'
}

function* outer2() {
  yield 'open'
  yield* inner()
  yield 'close'
}

for( let res of outer2()) {
  console.log(res) // inner open close
}