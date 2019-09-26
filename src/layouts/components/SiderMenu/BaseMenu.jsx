
import React, { PureComponent } from 'react';
import { Menu, Icon } from 'antd';
import Link from 'umi/link';
const { SubMenu } = Menu

export default class BaseMenu extends PureComponent {
  // constructor(props) {
  //   super(props)
  // }
  handleClick = (e) => {
    console.log(e)
  }
  render(){
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['bossMenu']}
        defaultOpenKeys={['boss']}
        mode="inline"
      >
      <SubMenu
          key="boss"
          title={
            <span>
              <Icon type="mail" />
              <span>boss权限</span>
            </span>
          }
        >
          <Menu.Item key="bossMenu">
            <Link to='/bossAut/menu'>
              <span>菜单权限</span>
            </Link>
            </Menu.Item>
          <Menu.Item key="bossData">
            <Link to='/bossAut/data'>
              <span>菜单权限</span>
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}

