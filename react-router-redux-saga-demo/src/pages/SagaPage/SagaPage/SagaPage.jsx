import React, { Component } from 'react';
import { connect } from 'react-redux'
import { onIncrement, onDecrement, onDecrementAsync} from './action'

class SagaPage extends Component {
  DynamicImport = () => {
    import('./myImport.js')
      .then(res => {
        console.log(res.default)
        
      })
  }
  render() {
    const { onIncrement, onDecrement, count,onDecrementAsync } =  this.props
    return (
        <div>
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrementAsync}>
        onDecrementAsync
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        <hr />
        <div>
          Clicked: {count} times
        </div>
        <div>
        <button onClick={this.DynamicImport}>
        DynamicImport
        </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
} 
const mapDispatchToProps =  {
  onIncrement,
  onDecrement,
  onDecrementAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(SagaPage);