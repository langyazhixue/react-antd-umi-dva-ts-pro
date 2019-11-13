import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import Header from './components/Header';
import SiderMenu from './components/SiderMenu';
import { Layout } from 'antd'
import { ContainerQuery } from 'react-container-query';
import DocumentTitle from 'react-document-title';
// import Media from 'react-media';
import classNames from 'classnames';
import MenuContext from './MenuContext'
const { Content } = Layout
// const BasicLayout: React.FC = props => {
//   return (
//     <div className={styles.normal}>
//       <h1 className={styles.title}>Yay! Welcome to umi!</h1>
//       {props.children}
//     </div>
//   );
// };
const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};

class BasicLayout extends React.Component{
  // constructor(props){
  //   super(props)
  // }
  componentDidMount(){
    console.log(this.props)
  }
  // 获取自组件需要的值
  getContext() {
    const { location } = this.props;
    return {
      location
    };
  }
  render(){
    const contentStyle = {
      color: 'red'
    }
    const { children } = this.props
    const layout = (
      <Layout>
        <SiderMenu
            {...this.props}
          />
          <Layout 
          style={{
            paddingLeft:'0px',
            minHeight: '100vh',
          }}
          >
            <Header
            {...this.props}
          />
            <Content className={styles.content} style={contentStyle}>
              {children}
            </Content>
          </Layout>
      </Layout>
    )
    return (
      <React.Fragment>
        <DocumentTitle title='后台'>
            <ContainerQuery query={query}>
            {params => (
              <MenuContext.Provider value = {this.getContext()}>
                <div className={classNames(params)}>{layout}</div>
              </MenuContext.Provider>
            )}
            </ContainerQuery>
        </DocumentTitle>
      </React.Fragment>
    ) 
  }
} 

export default connect(state => {
  console.log(state)
  return state
})(props => (
  <BasicLayout {...props} />
));

