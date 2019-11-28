// Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案
// ReactDOM.createPortal(child, container)
// 1. child, 是任何可渲染的React子元素
// 2. container DOM元素

// 一个 portal 的典型用例是当父组件有 overflow: hidden 或 z-index 样式时，但你需要子组件能够在视觉上“跳出”其容器。例如，对话框、悬浮卡以及提示框

// 通过Portal进行事件冒泡
// 这包含事件冒泡。一个从 portal 内部触发的事件会一直冒泡至包含 React 树的祖先，即便这些元素并不是 DOM 树 中的祖先。
import React from 'react';
import ReactDOM from 'react-dom';
const modalRoot = document.getElementById('model-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    // 在 Modal 的所有子元素被挂载后，
    // 这个 portal 元素会被嵌入到 DOM 树中，
    // 这意味着子元素将被挂载到一个分离的 DOM 节点中。
    // 如果要求子组件在挂载时可以立刻接入 DOM 树，
    // 例如 衡量一个 DOM 节点，
    // 或者在后代节点中使用 ‘autoFocus’，
    // 则需添加 state 到 Modal 中，
    // 仅当 Modal 被插入 DOM 树中才能渲染子元素。
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

// The Modal component is a normal React component, so we can
// render it wherever we like without needing to know that it's
// implemented with portals.
class PortalsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: true ,clicks : 0};
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }
  handleClick =()=>{
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }
  handleShow() {
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
  }
  handlerChildClick = (e)=> {
    e.stopPropagation()// 这样就不会产生事件冒泡
    console.log('ff')
  }
  render() {
    // Show a Modal on click.
    // (In a real app, don't forget to use ARIA attributes
    // for accessibility!)
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div>
            with a portal, we can render content into a different part of the DOM, as if it were any
            other React child.
          </div>
          This is being rendered inside the #modal-container div.
          <button onClick={this.handleHide}>Hide modal</button>
          <h2>测试事件冒泡</h2>
          <div className="">
            <button onClick={this.handlerChildClick}>Click</button>
          </div>
        </div>
      </Modal>
    ) : null;
    return (
      <div className="app" onClick={this.handleClick}>
      <div>
        <h2>事件冒泡</h2>
        <p>Number of clicks: {this.state.clicks}</p>
      </div>
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    );
  }
}

// 通过Portal

export default PortalsApp;
