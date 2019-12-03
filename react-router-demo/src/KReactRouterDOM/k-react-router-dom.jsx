import { createBrowserHistory } from 'history';
import React,{ useContext } from 'react';
const RouterContext = React.createContext();

export class KBrowserRouter extends React.Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory(this.props);
    this.state = {
      location: this.history.location,
    };
    this.unlisten = this.history.listen(location => {
      this.setState({ location });
    });
  }
  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }
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
  const ctx = useContext(RouterContext)
  const { path, commponent: Cmp } = props
  const { location } = ctx
  console.group('match')
  console.log(path)
  console.log(location)
  let match = path ===location.pathname
  return match ? <Cmp /> : null 
}

// 实现 Link

export class KLink extends React.Component {
  handleClick = (event,history) => {
    event.preventDefault()
    history.push(this.props.to)
  }
  render(){
    const { to, children } = this.props
    return (
      <RouterContext.Consumer>
        {
          ctx =>{
            return (
              <a 
              href={to} 
              onClick={event => this.handleClick(event, ctx.history)}>
              {children}
              </a>
            )
          }
        }
      </RouterContext.Consumer>
    )
  }
}


