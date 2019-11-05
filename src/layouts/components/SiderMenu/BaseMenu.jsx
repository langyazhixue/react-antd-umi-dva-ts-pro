import React, { PureComponent } from 'react';
import { Menu, Icon } from 'antd';
import Link from 'umi/link';
const { SubMenu } = Menu;

export default class BaseMenu extends PureComponent {
  // constructor(props) {
  //   super(props)
  // }
  handleClick = e => {
    console.log(e);
  };
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['jsx']}
        defaultOpenKeys={['study']}
        mode="inline"
        theme="dark"
      >
        <SubMenu
          key="study"
          title={
            <span>
              <Icon type="mail" />
              <span>学习</span>
            </span>
          }
        >
          <Menu.Item key="jsx">
            <Link to="/study/jsx">
              <span>jsx测试</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="myClass">
            <Link to="/study/myClass">
              <span>class学习</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="props">
            <Link to="/study/props">
              <span>props类型检查</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="life">
            <Link to="/study/life">
              <span>生命周期</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="setState">
            <Link to="/study/setStateTest">
              <span>setState特性讨论</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="communication">
            <Link to="/study/communication">
              <span>组件的几种通信方式</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="context">
            <Link to="/study/context">
              <span>context</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="hooks">
            <Link to="/study/hooks">
              <span>hooks学习</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="HOC">
            <Link to="/study/HOC">
              <span>高阶组件-HOC</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="chain">
            <Link to="/study/chainTest">
              <span>链式调用</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="decorator">
            <Link to="/study/decorator">
              <span>装饰器</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="composition">
            <Link to="/study/composition">
              <span>组件复合</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="KForm">
            <Link to="/study/KForm">
              <span>表单组件</span>
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
