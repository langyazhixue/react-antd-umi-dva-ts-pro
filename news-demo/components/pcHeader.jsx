// import React, { Component } from 'react'
// import Layout from 'antd/lib/layout'
// import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { 
    Row, 
    Col,
    Menu,
    Icon, 
    Tabs, 
    Form, 
    message, 
    Input, 
    Button, 
    CheckBox,
    Modal 
} from 'antd'
const React = require('react')

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const FormItem = Form.Item
const TabPane = Tabs.TabPane
class ComponentPcHeaderPrimary extends React.Component {
    constructor() {
        super()
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userId: 0
        }
    }
    hideModal = () => {
        this.setState({
            modalVisible: false
        })
    }
    showModal({ item, key, selectedKeys }) {
        if (key === 'register') {
            this.setState({
                current: 'register',
                modalVisible: true
            }) 
        } else {
            this.setState({
                current: key
            }) 
        }
        
    }
    logout() {
        localStorage.clear()
        this.setState({
            hasLogined: false
        })
        message.success('退出成功')
    }
    handleSubmit(e) {
        e.preventDefault()
        let myFetchOptions = {
            method: 'GET'
        }
        let formData = this.props.form.getFieldsValue()
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=' + this.state.action
        + '&username=' + formData.userName + '&password=' + formData.password
        + '&r_userName=' + formData.r_userName + '&r_password='
        + formData.r_password + '&r_confirmPassword='
        + formData.r_confirmPassword, myFetchOptions)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                if (json === null) {
                    if (this.state.action === 'login') {
                        message.error('账号或者密码错误')
                    }
                    localStorage.clear()
                    return false
                }
                if (this.state.action === 'login') {
                    this.setState({
                        hasLogined: true
                    })
                    this.setState({ userNickName: json.NickUserName, userId: json.UserId })
                    localStorage.setItem('userNIckName', json.NickUserName)
                    localStorage.setItem('userId', json.UserId)
                    this.hideModal()
                    message.success('登录成功')
                } else if (this.state.action === 'register') {
                    this.setState({
                        action: 'login'
                    })
                    message.success('注册成功')
                } 
                return true
            })
            .catch((res) => {
                console.log(res)
            })
    }
    callback(key) {
        if (key === 'register') {
            this.setState({
                action: 'register'
            }) 
        } else if (key === 'login') {
            this.setState({
                action: 'login'
            }) 
        }
    }
    componentWillMount() {
        let userNIckName = localStorage.getItem('userNIckName')
        let userId = localStorage.getItem('userId')
        if (userNIckName !== null) {
            this.setState({
                hasLogined: true,
                userNickName: userNIckName,
                userId: userId
            })
        }
    }
    render = () => {
        const { getFieldDecorator } = this.props.form
        const userShow = this.state.hasLogined
            ?
            <Menu.Item key = 'logout' class = 'register' >
                <Button type = 'default' htmlType = 'button'>{ this.state.userNickName }</Button>
                &nbsp;&nbsp;
                <Link to = '/pcUserCenter' target = '_blank'>
                    <Button type = 'primary' htmlType = 'button' >个人中心</Button>
                </Link>
                &nbsp;&nbsp;
                <Button type = 'primary' htmlType = 'button' onClick = { this.logout.bind(this) }>退出</Button>
            </Menu.Item>
            :
            <Menu.Item key = 'register' class = 'register' >
                <Icon type = 'appstore' />注册/登录
            </Menu.Item>

        return (
            <div class = 'pcContainer'>
                <header>
                    <Row>
                        <Col span = { 2 }></Col>
                        <Col span = { 4 }>
                            <a href = '/' className = 'logo'>
                                {/* <img src = './src/images/logo.png' alt = 'logo' /> */}
                                <span>React News</span>
                            </a>
                        </Col>
                        <Col span = { 16 }>
                            <Menu 
                                mode = 'horizontal' 
                                defaultSelectedKeys = { [ 'news' ] } 
                                onClick = { this.showModal.bind(this) }
                            >
                                <Menu.Item key = 'news'>
                                    <Icon type = 'appstore' />头条
                                </Menu.Item>
                                <Menu.Item key = 'society'>
                                    <Icon type = 'gift' />社会
                                </Menu.Item>
                                <Menu.Item key = 'domestic'>
                                    <Icon type = 'idcard' />国际
                                </Menu.Item>
                                <Menu.Item key = 'foreign'>
                                    <Icon type = 'shop' />国内
                                </Menu.Item>
                                <Menu.Item key = 'fun'>
                                    <Icon type = 'idcard' />娱乐
                                </Menu.Item>
                                <Menu.Item key = 'pe'>
                                    <Icon type = 'solution' />体育
                                </Menu.Item>
                                <Menu.Item key = 'technology'>
                                    <Icon type = 'qrcode' />科技
                                </Menu.Item>
                                <Menu.Item key = 'fashion'>
                                    <Icon type = 'flag' />时尚
                                </Menu.Item>
                                { userShow }
                            </Menu>

                            <Modal 
                                title = '用户中心'
                                wrapClassName = 'vertical-center-modal'
                                visible = { this.state.modalVisible }
                                onOk= { this.hideModal.bind(this) }
                                onCancel= { this.hideModal.bind(this) }
                                okText= '确认'
                                cancelText= '取消'
                                width = '400'
                            >
                                <Tabs 
                                    defaultActiveKey = 'login' 
                                    tabPosition = 'top'
                                    onChange = { this.callback.bind(this) }
                                    activeKey = { this.state.action}

                                >
                                    <TabPane tab = '登录' key = 'login'>
                                        <Form layout = 'horizontal' onSubmit = { this.handleSubmit.bind(this)}>
                                            <FormItem label = '账户'>
                                                { getFieldDecorator('userName', {
                                                    rules: [{
                                                        type: 'string', message: 'The input is not valid string!'
                                                    }, {
                                                        required: true, message: 'Please input your userNickName!'
                                                    }]
                                                })(
                                                    <Input type = 'text' placeholder = '请输入您的账户' {...getFieldDecorator('userName')} />
                                                ) }
                                            </FormItem>
                                            <FormItem label = '密码'>
                                                { getFieldDecorator('password', {
                                                    rules: [{ 
                                                        type: 'number', message: 'The input is not valid number'
                                                    }, {
                                                        required: true, message: 'Please input your password!' 
                                                    }]
                                                })(
                                                    <Input type = 'password' placeholder = '请输入您的密码' {...getFieldDecorator('password')} />
                                                ) }
                                            </FormItem>
                                            <Button type = 'primary' htmlType = 'submit'>
                                                登录
                                            </Button>
                                        </Form>
                                    </TabPane>
                                    <TabPane tab = '注册' key = 'register' >
                                        <Form layout = 'horizontal' onSubmit = { this.handleSubmit.bind(this)}>
                                            <FormItem label = '账户'>
                                                { getFieldDecorator('r_userName', {
                                                    rules: [{
                                                        type: 'string', message: 'The input is not valid string!'
                                                    }, {
                                                        required: true, message: 'Please input your userNickName!'
                                                    }]
                                                })(
                                                    <Input type = 'text' placeholder = '请输入您的账户' {...getFieldDecorator('r_userName')} />
                                                ) }
                                            </FormItem>
                                            <FormItem label = '密码'>
                                                { getFieldDecorator('r_password', {
                                                    rules: [{ 
                                                        type: 'number', message: 'The input is not valid number'
                                                    }, {
                                                        required: true, message: 'Please input your password!' 
                                                    }]
                                                })(
                                                    <Input type = 'password' placeholder = '请输入您的密码' {...getFieldDecorator('r_password')} />
                                                ) }
                                            </FormItem>
                                            <FormItem label = '确认密码'>
                                                { getFieldDecorator('r_confirmPassword', {
                                                    rules: [{ 
                                                        type: 'number', message: 'The input is not valid number'
                                                    }, {
                                                        required: true, message: 'Please input your password!' 
                                                    }]
                                                })(
                                                    <Input type = 'password' placeholder = '请确认您的密码' {...getFieldDecorator('r_confirmPassword')} />
                                                ) }
                                            </FormItem>
                                            <Button type = 'primary' htmlType = 'submit'>
                                                注册
                                            </Button>
                                        </Form>
                                    </TabPane>
                                    
                                </Tabs>
                            </Modal>
                        </Col>

                        <Col span = { 2 }>
                        </Col>
                    </Row>
                </header>
            </div>
            
        )
    }
}

const ComponentPcHeader = Form.create()(ComponentPcHeaderPrimary)
export { ComponentPcHeader }