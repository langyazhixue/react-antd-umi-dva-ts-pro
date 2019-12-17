import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const ButtonTip = ({title}) => {
  
  return (<Button>{{title}}</Button>)
}
// 定义属性类型
ButtonTip.PropTypes = {
  title:PropTypes.string.isRequired
}

export default ButtonTip