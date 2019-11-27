import React, { Component } from 'react';
import PropTypes from 'prop-types';
class MyChildTest extends Component {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.tel}</p>
        <p>{this.props.user.name}</p>
        <p>{this.props.myType}</p>
      </div>
    )
  }
}
// 定义组件的默认props
// 跟Vue一样定义默认的props
MyChildTest.defaultProps = {
  title: '标题',
  tel: '19009889877',
  user:{
    name:''
  },
  myType:'News'
};

// 跟Vue 一样定义默认的props
// 并指定类型
MyChildTest.propTypes = {
  title: PropTypes.string,
  tel: PropTypes.string,
  user: PropTypes.object,
  myType: PropTypes.oneOf(['News', 'Photos']),
};

class index extends Component {
  render() {
    const props1 = {
      title: '11',
      tel: '19009889877',
      user:{
        name:'111'
      },
      myType:'Photos'
    }
    return (
      <div>
        <MyChildTest {...props1} />
      </div>
    );
  }
}

export default index; 