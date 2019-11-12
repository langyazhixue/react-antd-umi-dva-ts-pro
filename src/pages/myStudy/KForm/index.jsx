import KFormCreate from './kFormCreate';
// import KFormCreateHook from './KFormCreateHook';
import React, { Component } from 'react';
// kFormCreate 是
const nameRules = {
  required: true,
  message: 'please input your name!',
};
const passwordRules = {
  required: true,
  message: 'please input your password!',
};

//getFieldDecorator
// validateFields
// getFieldValue
// 用装饰器方法
@KFormCreate
// @KFormCreateHook
class MyFormPage extends Component {
  handleSubmit2 =() => {
    const { validateFields } = this.props;
    validateFields((err, values) => {
      if (err) {
        console.log('validateFields', err);
      } else {
        console.log('submit', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>MyFormPage</h1>
        <div>
          {getFieldDecorator('name', {
            rules: [nameRules],
          })(
            <div>
              <label>姓名：</label>
              <input type="text" />
            </div>,
          )}

          {getFieldDecorator('password', {
            rules: [passwordRules],
          })(
            <div>
              <label>密码：</label>
              <input type="password" />
            </div>
          )}
        </div>
        <div>
          <button onClick={this.handleSubmit2}>submit</button>
        </div>
      </div>
    );
  }
}

export default MyFormPage
// export default KFormCreate(MyFormPage);
