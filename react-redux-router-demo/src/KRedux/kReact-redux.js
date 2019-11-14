import React from 'react'
import PropTypes from 'prop-types'

import {bindActionCreators} from './kkb-redux' 

export const connect = (mapStateToProps = state =>state, mapDispatchToProps = {}) => (WrapComponent) => {
  return class ConnecntComponent extends React.Component {
    // class组件中声明静态contextTypes可以获取上下⽂文 Context
    static contextTypes = {
      store: PropTypes.object
    }
    constructor(props,context) {
      super(props,context)
      this.state = {
        props:{}
      }
    }
    componentDidMount() {
      const { store} = this.context
      store.subscribe(() => this.update())
      this.update()
    }

    update(){
      const { store } = this.context
      // state = > ({num: state.counter})
      const stateProps = mapStateToProps(store.getState())
      
      // { add:() => (type:'add') }
      const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch) 
      this.setState({
        props:{
          ...this.state.props,
          ...stateProps,
          ...dispatchProps
        }
      })
      
    }
    render(){
      return <WrapComponent {...this.state.props}></WrapComponent>
    }
  }
}

export class Provider extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  }
  // getChildContext表示该组件通过context传递数据，该方法返回的对象就是context需要传递的数据
  getChildContext() {
    return {
      store: this.store
    }
  }
  constructor(props,context) {
    super(props,context)
    this.store = props.store
  }

  render(){
    return this.props.children
  }
}
