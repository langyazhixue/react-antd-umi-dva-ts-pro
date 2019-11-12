import React, { Component } from 'react';
// 表单组件要求实现数据收集、校验、提交等特性，可 通过 阶组件扩展
// 高阶组件给表单组件传递 个input组件包装函数接 管其输 事件并统 管 表单数据
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
    getFieldsValue = () => {
      return this.state
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
          <Cmp {...this.props}
          validateFields = {this.validateFields}
          getFieldsValue={this.getFieldsValue}
          getFieldValue = {this.getFieldValue}
          getFieldDecorator = {this.getFieldDecorator}/>
        </div>
      );
    }
  };
}


