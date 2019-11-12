import React, { Component } from 'react';
import KDialog from './KDialog'
class KDialogTest extends Component {
  constructor(props){
    super(props)
    this.state = {
      needDialog:true
    }
  }
  toggle = () => {
    this.setState({
      needDialog:!this.state.needDialog
    })
  }
  hideDialog = () => {
    this.setState({
      needDialog:false
    })
  }
  render() {
    const { needDialog } = this.state
    return (
      <div>
        <h2>弹窗组件</h2>
        <button onClick={this.toggle}> toggle</button>
        {
          needDialog ? <KDialog hideDialog={this.hideDialog}>1111</KDialog> : null
        }

      </div>
    );
  }
}

export default KDialogTest
