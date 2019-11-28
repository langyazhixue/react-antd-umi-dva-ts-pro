import React, { Component } from 'react';

// Refs 转发
// Ref 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧。对于大多数应用中的组件来说，这通常不是必需的。但其对某些组件，尤其是可重用的组件库是很有用的
// Ref 转发 是一个可选特性，其允许某些组件接收 ref, 并将其向下传递（换句话说，转发它）给子组件

// 组件库维护者的注意事项
// 1. 当你开始在组件库中使用forwardRef时候，你应当将其视为一个破坏性更改，并发布库的一个新的主版本
const FancyButton = React.forwardRef((props, ref) => {
  // props 中 不包括 ref
  console.group('FancyButton');
  console.log(props);
  const handlerClick = () => {
    console.log('click');
    console.log(ref); // 可以获得引用
  };
  return (
    <button ref={ref} className="FancyButton" onClick={handlerClick}>
      {props.children}
    </button>
  );
});

// 你可以直接获取 DOM button 的 ref
// React.createRef
// React.createRef 创建一个能够通过 ref 属性附加到 React 元素的 ref
class RefTransmitTest extends Component {
  componentWillMount() {
    const ref = React.createRef();
    this.ref = ref;
    const refHoc = React.createRef();
    this.refHoc = refHoc;
  }
  componentDidMount() {
    console.group('RefTransmitTestDidMount');
    //  在父组件可以操作自身组件
    console.log(this.ref) // current 指向 button
    console.log(this.refHoc) // current 指向 FancyButton22 组件
  }
  render() {
    var LogProps = logProps(FancyButton22);
    return (
      <div>
        <FancyButton ref={this.ref}>Click me!</FancyButton>
        <div>
          <h2>高阶组件 ref 的传递</h2>
          {/* ref传递不下去 */}
          {/* ref 不是prop 属性，就像 */}
          <LogProps id="gaojie" ref={this.refHoc} />
        </div>
      </div>
    );
  }
}

// 在高阶组件中转发 refs
function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        testState:'1111'
      }
    }
    componentDidMount(prevProps, prevState) {
      console.group('old props');
      console.log('old props:', prevProps);
      console.log('old state:', prevState); // 拿不到
      console.log('new props:', this.props);
    }
    render() {
      const { forwardedRef, ...rest } = this.props;
      // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
      return <WrappedComponent ref={forwardedRef} {...rest} />;
    }
  }
  // 注意： React.forwardRef 回调的第二个参数‘ref'
  // 我们可以将其作为常规 prop  属性传递给 LogProps,例如‘forwardRef’
  // 然后它就可以被挂载到被LogProps包裹的自组件上
  // 高阶组件中要转一下
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />
  })
}

class FancyButton22 extends React.Component {
  focus() {
    // ...
  }
  render() {
    return (
      <div>name</div>
    )
  }
}
export default RefTransmitTest;
