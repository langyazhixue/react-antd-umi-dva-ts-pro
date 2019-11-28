import React, { Component, useState } from 'react';
import CloneElementTestMY from './MyCloneElement';
import MyReactChildren from './MyReactChildren';
import MyReactRef from './MyReactRef';
import MyReactSuspense from './MyReactSuspense'
class ReactComponentTest extends Component {
  //1. React.Component 是使用 ES6 classes 方式定义 React 组件的基类：
  render() {
    var MyChild = foo2(foo(Child));
    return (
      <div>
        <h1>React Component</h1>
        <h1>hello React</h1>
        <ReactPureComponentTest />
        <ReactMemoTest />
        <h2>React.element</h2>
        {Title}

        <div>
          <h2>测试 cloneElement</h2>
          {/* Hook 函数式组件只能 <MyHook />*/}
          <MyHook />
          {MyCloneElementTest()}
          <CloneElementTestMY />
        </div>
        <div>
          <h2>React.isValidElement</h2>
          <MyChild />
        </div>
        <div>
          <h2>React.Children 测试 </h2>
          <MyReactChildren />
        </div>
        <div>
          <h2>React.Fragment 测试 </h2>
          <ReactFragementTest />
        </div>
        <div>
          <MyReactRef />
        </div>
       <div>
         <h2>React.lazy</h2>
         <div><MyReactSuspense /></div>
       </div>
      </div>
    );
  }
}

// 2. React.PureComponent 与 React.Component 很相似。
// React.PureComponent 中的 shouldComponentUpdate() 仅作对象的浅层比较
// 而 React.PureComponent 中以浅层对比 prop 和 state 的方式来实现了该函数
class ReactPureComponentTest extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>React PureComponent</h2>
        <div>{this.props.count}</div>
      </div>
    );
  }
}

// 3. React.memo 为高阶组件。 它与 React.PureComponent 非常相似，但它适用于函数组件
// 此方法仅作为性能优化的方式而存在。但请不要依赖它来“阻止”渲染，因为这会产生 bug
const ReactMemoTest = React.memo(props => {
  return (
    <div>
      <h2>React.memo 为高阶组件</h2>
      <div>{props.count}</div>
    </div>
  );
});

// 4. createElement() 　类似于 写 JSX
// React.createElement(
//   type,
//   [props],
//   [...children]
// )
// const title = React.createElement("h1", {className: "main"}, "Hello React (method 2)")
// const title = (
//   <h1>Hello React (method 2)</h1>
// );
// 上面两个是相等的

function MyCreateElementTest(props) {
  return (
    <div>
      <div>createElement test</div>
      {props.count}
    </div>
  );
}
const Title = React.createElement('h1', { className: 'main', key: 'sss' }, [
  'Hello React (method 2)',
  React.createElement(MyCreateElementTest, {
    key: 's',
    count: '11',
  }),
]);

// 5. isValidElement()
// 验证对象是否为 React 元素，返回值为 true 或 false。
function Child(props) {
  console.log(props);
  return (
    <div>
      <h2>isValidElement</h2>
      <div style={{ color: 'green' }}>Child</div>;
    </div>
  );
}

const foo = Cmp => props => {
  // console.group('isValidElement')
  const jsx = <div>111</div>;
  console.group('jsx');
  console.log(React.isValidElement(jsx));
  if (React.isValidElement(Cmp)) {
    return (
      <div style={{ backgroundColor: 'red' }}>
        <Cmp {...props} />
      </div>
    );
  } else {
    return null;
  }
};

//  从外向里渲染
const foo2 = Cmp => props => {
  // console.log(React.isValidElement(Cmp));
  return (
    <div style={{ backgroundColor: 'green' }}>
      <Cmp {...props} />
    </div>
  );
};

// 6. cloneElement()
// 以 element 元素为样板克隆并返回新的 React 元素。返回元素的 props 是将新的 props 与原始元素的 props 浅层合并后的结果。
// 新的子元素将取代现有的子元素，而来自原始元素的 key 和 ref 将被保留。
//几乎等同于 <element.type {...element.props} {...props}>{children}</element.type>

// createElement 返回的虚拟dom不好扩展，我们想自己定制onchange或者props的时候，使用cloneElement进行元素的扩展
// 用 hook 写一个cloneElement 案例

// React.cloneElement()与 React.createElement()相似，不同的是它传入的第一个参数element是一个 React 元素，而不是标签名或组件。
// 新添加的属性会并入原有的属性，传入到返回的新元素中，而旧的子元素将被替换。将保留原始元素的键和引用。
function MyHook() {
  const [value, setValue] = useState('');
  const CloneElemntFun = <input />;
  // cloneElement 传入的第一个值是一个React元素
  const MyCloneElelement = React.cloneElement(CloneElemntFun, {
    value: value,
    name: 'cloneElement',
    onChange: e => {
      setValue(e.target.value);
    },
  });
  console.log(MyCloneElelement); // 是 React对象了
  return MyCloneElelement;
}

function MyCloneElementTest() {
  const CloneElemntFun = <div>test</div>;
  const MyCloneElelement = React.cloneElement(CloneElemntFun, {
    id: '111',
    name: 'cloneElement',
  });
  console.log(MyCloneElelement); // 是 React对象了
  return MyCloneElelement;
}

// 通过 React.cloneElement 向子组件传递 state 及 function

// React.Fragment
// React.Fragment 组件能够在不额外创建 DOM 元素的情况下，让 render()方法中返回多个元素

function ReactFragementTest() {
  return (
    <React.Fragment>
      Some text.
      <h2>A heading</h2>
    </React.Fragment>
  );
}

// React.Children
// React.createRef
// React.forwardRef
// React.lazy 允许你定义一个动态加载的组件。这有助于缩减bundle的体积，并延迟加载在初次渲染时未用到的组件
// const SomeComponent = React.lazy(() => import('./SomeComponent'));
// React.Suspense
export default ReactComponentTest;
