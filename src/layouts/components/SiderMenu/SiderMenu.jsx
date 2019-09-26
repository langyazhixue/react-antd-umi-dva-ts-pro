import React, { PureComponent, Suspense } from 'react';
import { Layout } from 'antd';
import PageLoading from '@/components/PageLoading';
const { Sider } = Layout
const BaseMenu = React.lazy(() => import('./BaseMenu'));

export default class SiderMenu extends PureComponent {
  // constructor(props) {
  //   super(props)
  // }
  render(){
    return (
      <Sider>
        <Suspense fallback={<PageLoading />}>
          <BaseMenu
            {...this.props}
            mode="inline"
          />
        </Suspense>
      </Sider>
    )
  }
}
