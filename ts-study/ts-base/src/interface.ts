interface List {
  id: number,
  name: string
}
interface Result {
  data: List[]
}

function render(result:Result) {
  result.data.forEach(v => {
    console.log(v.id,v.name)
  })
}

let result = {
  data: [
    {
      id:1,
      name:'S'
    },
    {
      id: 2,
      name:'B'
    }
  ]
}

render(result)