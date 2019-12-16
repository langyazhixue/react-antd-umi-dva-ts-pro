
import React from 'react'
import { connect } from 'dva'
import { Button } from 'antd'
const Products = (props) => {
  console.log(props)
  // history location match 
  // redux -> examples
  const { dispatch } = props
  function hanlderClick(){
    dispatch({
      type:'example/save',
      payload:{
        title:'111'
      }
    })
  }
  function hanlderClick2 () {
    dispatch({
      type:'example/fetch',
      payload:{
        title: 'asyncTitle'
      }
    })
  }
  return (
  <div>
    <Button onClick={hanlderClick}>{'dva-modle'}</Button>
    <Button onClick={hanlderClick2}>{'dva-async-modle'}</Button>
  </div>
  )
}

const mapStateToProps = (state) => {
  return  {
    title: state.example.title,
    asyncTitle: state.example.asyncTitle,
  }
}
export default connect(mapStateToProps)(Products)