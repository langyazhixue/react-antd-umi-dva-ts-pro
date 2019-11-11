import React, { Component } from 'react';

// 组件优化可以做的事情

class  OptimizeReact extends Component {
  render() {
    return (
      <div>
        <h2>1.webpack打包优化</h2>
        <h2>2 使用开发者工具中的分析器对组件进行分析</h2>
        <h2>3. 虚拟化长列表</h2>
        <div>
        如果你的应用渲染了长列表（上百甚至上千的数据），我们推荐使用“虚拟滚动”技术。
        这项技术会在有限的时间内仅渲染有限的内容，并奇迹般地降低重新渲染组件消耗的时间，以及创建 DOM 节点的数量。
        `react-window` 和 `react-virtualized` 是热门的虚拟滚动库。
        它们提供了多种可复用的组件，用于展示列表、网格和表格数据。
        </div>
       <h2>
         4. shouldComponentUpdate React.pureComponent
       </h2>
         5. 不可变的数据力量

      </div>
    );
  }
}

export default OptimizeReact;