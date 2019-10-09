import React, { Component } from 'react' 
import { Link, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
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
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const FormItem = Form.Item
const TabPane = Tabs.TabPane
class ComponentMobileHeaderPrimary extends Component {
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
    hideModal() {
        this.setState({
            modalVisible: false
        })
    }
    showModal() {
        this.setState({
            modalVisible: true
        })
    
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
                // console.log(res)
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
    render() {
        const { getFieldDecorator } = this.props.form
        const userShow = this.state.hasLogined
            ?
            <Link class = 'login clfix' to = {`/mobileUserCenter`}>
                <Icon type = 'inbox' style={{ fontSize: 16 }}/>
            </Link>
            :
            <Icon type = 'setting' onClick = { this.showModal.bind(this) } class = 'login clfix' />
        return (
            <div class = 'mobileComtainer'>
                <header class = 'logo'>
                    <span>React News</span>
                    { userShow }
                </header>
                <Modal 
                    title = '用户中心'
                    wrapClassName = 'vertical-center-modal'
                    visible = { this.state.modalVisible }
                    onOk= { this.hideModal.bind(this) }
                    onCancel= { this.hideModal.bind(this) }
                    okText= '确认'
                    cancelText= '取消'
                >
                    <Tabs 
                        defaultActiveKey = 'login' 
                        type = 'card'
                        tabPosition = 'top'
                        onChange = { this.callback.bind(this) }
                        activeKey = { this.state.action}

                    >
                        <TabPane tab= '登录' key= 'login'>
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
                        <TabPane tab= '注册' key= 'register' >
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
            </div>
        )
    }
}

const ComponentMobileHeader = Form.create()(ComponentMobileHeaderPrimary)

export { ComponentMobileHeader }