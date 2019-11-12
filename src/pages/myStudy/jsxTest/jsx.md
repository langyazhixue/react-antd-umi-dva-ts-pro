### jsx
实际上，JSX 仅仅只是 React.createElement(component, props, ...children) 函数的语法糖

```js
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```
会被编译称为

```js
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)

```

如果没有子节点，你还可以使用自闭合的标签形式，如：

```js
<div className="sidebar" />

```
会被编译称为

```js
React.createElement(
  'div',
  {className: 'sidebar'},
  null
)
```


### React  必须在作用域内
*  由于 JSX 会编译 为 `React.createElement`调用形式，所以React库也必须包含在 JSX 代码作用域内

### 在 JSX 类型中使用点语法

当你在一个模块中导出许多 React 组件时，这会非常方便。例如，如果 MyComponents.DatePicker 是一个组件，你可以在 JSX 中直接使用：

```js
import React from 'react';


const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}
function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
```

###  用户定义的组件必须以大写字母开头

### 在运行时选择类型 
  你不能将通用表达式作为 React 元素类型。如果你想通过通用表达式来（动态）决定元素类型，你需要首先将它赋值给大写字母开头的变量。这通常用于根据 prop 来渲染不同组件的情况下
  
  需要首先将类型赋值给一个大写字母开头的变量

  ```js
  import React from 'react';
  import { PhotoStory, VideoStory } from './stories';

  const components = {
    photo: PhotoStory,
    video: VideoStory
  };

  function Story(props) {
    // 正确！JSX 类型可以是大写字母开头的变量。
    const SpecificStory = components[props.storyType];
    return <SpecificStory story={props.story} />;
  }
  ```

### JSX 中的 Props

* JavaScript 表达式作为 Props

 你可以把包裹在 {} 中的 JavaScript 表达式作为一个 prop 传递给 JSX 元素

  ```js
  <MyComponent foo={1 + 2 + 3 + 4} /> // 执行结果是10
  ```

* 字符串字面量
 你可以将字符串字面量赋值给 prop. 如下两个 JSX 表达式是等价的

```js
<MyComponent message="hello world" />
<MyComponent message={'hello world'} />
```


* Props 默认值为`true` 不推荐
如果你没给 prop 赋值，它的默认值是 true。

```js
<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />
```
* 属性展开 ...

  如果你已经有了一个props对象，你可以使用展开运算符 ... 来在 JSX 中传递整个 props 对象。
  
  ```js
  const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
  };

  const App = () => {
    return (
      <div>
        <Button kind="primary" onClick={() => console.log("clicked!")}>
          Hello World!
        </Button>
      </div>
    );
  };
  ```

### JSX中的子元素

包含在开始和结束标签之间的JSX 表达式内容将作为特定属性props.childrn传递给外层组件
1. 你可以将字符串放在开始和结束标签之间，此时 props.children 就只是该字符串。这对于很多内置的 HTML 元素很有用。例如：

 ```js
 <MyComponent>Hello world!</MyComponent>
 ```
2. JSX 子元素
子元素允许由多个 JSX 元素组成。这对于嵌套组件非常有用：

```js
<MyContainer>
  <MyFirstComponent />
  <MySecondComponent />
</MyContainer>

```
React 组件也能够返回存储在数组中的一组元素

　```js
  render() {
    // 不需要用额外的元素包裹列表元素！
    return [
      // 不要忘记设置 key :)
      <li key="A">First item</li>,
      <li key="B">Second item</li>,
      <li key="C">Third item</li>,
    ];
  }
  ```
3. JavaScript 表达式作为子元素
js 表达式可以被包裹在`{}`中作为子元素。例如，以下表达式是等价的

```js
<MyComponent>foo</MyComponent>

<MyComponent>{'foo'}</MyComponent>
```

4. 这对于展示任意长度的列表非常有用。例如，渲染 HTML 列表：

```js
function Item(props) {
  return <li>{props.message}</li>;
}

function TodoList() {
  const todos = ['finish doc', 'submit pr', 'nag dan to review'];
  return (
    <ul>
      {todos.map((message) => <Item key={message} message={message} />)}
    </ul>
  );
}
```

JavaScript 表达式也可以和其他类型的子元素组合。这种做法可以方便地替代`模板字符串`：

```js
function Hello(props) {
  return <div>Hello {props.addressee}!</div>;
}
```
5. 函数作为子元素

通常，JSX 中的 JavaScript 表达式将会被计算为字符串、React 元素或者是列表。不过，props.children 和其他 prop 一样，它可以传递任意类型的数据，而不仅仅是 React 已知的可渲染类型。例如，如果你有一个自定义组件，你可以把`回调函数`作为 props.children 进行传递

```js
// 调用子元素回调 numTimes 次，来重复生成组件
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  )
}
```

6. 布尔类型、Null 以及 Undefined 将会忽略 

如果要显示的话 要先转换为字符串 

```js
 {String(myVariable)}
```

