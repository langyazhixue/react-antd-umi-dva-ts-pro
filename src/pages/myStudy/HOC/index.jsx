// 为了提高组件复用率，可测试性，就要保证组件功能单
// 但是若要满足复杂需求就要扩展功能单一的组件，在React中就有HOC(Higher- Order Components)的概念，

// 定义:是一个函数，它接收一个组件并返回另一个组件。
// EnhancedComponent = higherOrderComponent(WrappedComponent);
// 组件是将props 转换为UI,而高阶组件是将组件转换为另一个组件

// 使用 HOC 解决横切关注点问题
// 链式调用也属于高级组件
import React, { Component } from 'react';
// function Child(props) {
//   return <div>Child</div>;
// }
// const foo = Cmp => props => {
//   return <Cmp {...props} />;
// };

// class HOCTest extends Component {
//   render() {
//     const Foo = foo(Child);
//     return (
//       <div>
//         <Foo />
//       </div>
//     );
//   }
// }

// export default HOCTest;

// 使用 HOC 解决横切关注点问题
//
// 此函数接收一个组件...

class MydataSource {
  getComments(){
    return [
      {
        id:'1',
        name:'目录1'
      },
      {
        id:'2',
        name:'目录2'
      }
    ]
  }

  addChangeListener(func) {

  }
  removeChangeListener(fun){

  }
}

const DataSource = new MydataSource()
function withSubscription(WrappedComponent, selectData) {
  // ...并返回另一个组件...
  return class extends React.Component{
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // ...负责订阅相关的操作...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      // ... 并使用新数据渲染被包装的组件!
      // 请注意，我们可能还会传递其他属性
      console.group('comment')
      console.log(this.props)
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
// 函数式组件
function CommentList (props) {
  return (
    <div>
      {
        props.data.map(item => {
          return <li key={item.id}>{ item.name }</li>
        })
      }
    </div>
  )
}
const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
);


class HOCTest extends Component {
  render() {
    // const Foo = foo(Child);
    return (
      <div>
        <CommentListWithSubscription id='comment'/>
      </div>
    );
  }
}

// 不要改变原始组件。使用组合,不要试图在 HOC 中修改组件原型
// 您可能已经注意到 HOC 与容器组件模式之间有相似之处。容器组件担任分离将高层和低层关注的责任，由容器管理订阅和状态，
// 并将 prop 传递给处理渲染 UI。
// HOC 使用容器作为其实现的一部分，你可以将 HOC 视为参数化容器组件


// function logProps(WrappedComponent) {
//   return class extends React.Component {
//     componentWillReceiveProps(nextProps) {
//       console.log('Current props: ', this.props);
//       console.log('Next props: ', nextProps);
//     }
//     render() {
//       // 将 input 组件包装在容器中，而不对其进行修改。Good!
//       return <WrappedComponent {...this.props} />;
//     }
//   }
// }

// 约定：将不相关的 props 传递给被包裹的组件
// render() {
  // 过滤掉非此 HOC 额外的 props，且不要进行透传
//   const { extraProp, ...passThroughProps } = this.props;

//   // 将 props 注入到被包装的组件中。
//   // 通常为 state 的值或者实例方法。
//   const injectedProp = someStateOrInstanceMethod;

//   // 将 props 传递给被包装组件
//   return (
//     <WrappedComponent
//       injectedProp={injectedProp}
//       {...passThroughProps}
//     />
//   );
// }


export default HOCTest;
