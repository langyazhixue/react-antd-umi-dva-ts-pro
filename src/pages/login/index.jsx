import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Input, Icon, Button} from 'antd'

import styles from './index.less'
class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render () {
    console.log(this.props)
    const { getFieldDecorator } = this.props.form
    return (
      <div className={styles.loginContainer}>
        <Form
          onSubmit= { this.handleSubmit }
        >
          <Form.Item>
            <span>请登陆</span>
          </Form.Item>

          {/* 用户名 */}
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: 'Please input your username!' }
              ],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入用户名"
              />,
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="请输入密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登陆
          </Button>
        </Form.Item>
        </Form>
      </div>
    )
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm)
export default connect(state => {
  console.log(state)
  return state
} 
)(WrappedNormalLoginForm)