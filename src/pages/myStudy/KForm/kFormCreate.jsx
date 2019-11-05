import React, { Component } from 'react';

export default function KFormCreate(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props);
      // 各个字段选项
      this.options = {};
      this.state = {}; // 各个字段值
    }
    handleChange = e => {
      let { name, value } = e.target;
      this.setState({ [name]: value });
    }
    getFieldValue = field => {
      return this.state[field];
    }
    validateFields = callback => {
      const res = { ...this.state };
      const err = []
      for(let i in this.options) {
        if(res[i] === undefined) {
          err.push(
            {
              [i]: "error"
            }
          )
        }
      }
      if(err.length > 0) {
        callback(err,res)
      } else {
        callback(undefined, res);
      }
    }
    // 是一个高阶函数
    getFieldDecorator = (field, option) => {
      this.options[field] = option;
      return InputCmp =>
        React.cloneElement(InputCmp, {
          name: field,
          value: this.state[field] || '', //控件值
          onChange: this.handleChange,
        })
    }
    render() {
      return (
        <div className="form-contaienr">
          <Cmp {...this.props} validateFields = {this.validateFields} getFieldValue = {this.getFieldValue} getFieldDecorator = {this.getFieldDecorator}/>
        </div>
      );
    }
  };
}


