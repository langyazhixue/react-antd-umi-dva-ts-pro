
import { createBrowserHistory } from 'history';
import React, { useContext } from 'react';
const RouterContext = React.createContext();

export class KBrowserRouter extends React.Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory(this.props); // 利用History这个库
    this.state = {
      location: this.history.location,
    };
    // 订阅
    this.unlisten = this.history.listen(location => {
      console.group('listen')
      console.log(location)
      // 修改location，使得组件重新渲染
      this.setState({ location });
    });
  }
  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }
  // value 有修改。会触发组件重新渲染
  render() {
    return (
      <RouterContext.Provider
        children={this.props.children || null}
        value={{
          history: this.history,
          location: this.state.location,
        }}
      />
    )
  }
}

// 实现 Route
export function KRoute(props) {
  // ctx  可以拿到 location.history
  const ctx = useContext(RouterContext);
  const { path, commponent: Cmp } = props;
  const { location } = ctx;
  console.group('match');
  console.log(path);
  console.log(location);
  let match = path === location.pathname;
  return match ? <Cmp /> : null;
}

// 实现 Link
export class KLink extends React.Component {
  handleClick = (event, history) => {
    event.preventDefault();
    history.push(this.props.to);
  };
  render() {
    const { to, children } = this.props;
    return (
      <RouterContext.Consumer>
        {ctx => {
          return (
            <a href={to} onClick={event => this.handleClick(event, ctx.history)}>
              {children}
            </a>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}
