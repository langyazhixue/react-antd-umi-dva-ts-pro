import React, { PureComponent } from 'react';
import { Layout } from 'antd';
const { Header } = Layout

export default class AppHeader extends  PureComponent  {
  constructor(props){
    super(props)
    this.state = {
      headerTitle:'this is header'
    }
  }
  render(){
    const { headerTitle } = this.state
    return (
      <Header>
        { headerTitle }
      </Header>
    )
  }
} 