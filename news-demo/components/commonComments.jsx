import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { 
    Row,
    Col, 
    Form,
    Input,
    Button,
    Card,
    notification,
    message
} from 'antd'
const FormItem = Form.Item
const TextArea = Input.TextArea
class CommonComments_ extends Component {
    constructor() {
        super()
        this.state = {
            comments: ''
        }
    }
    settings() {
        notification.config({
            placement: 'topRight',
            duration: 1
        })
    }
    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey="
        + this.props.uniquekey, myFetchOptions)
            .then((response) => { 
                return response.json() 
            })
            .then((json) => {
                this.setState({ comments: json })
            })
        this.settings()
    }
    handleSubmit(e) {
        e.preventDefault()
        var myFetchOptions = {
            method: 'GET'
        }
        // 结构赋值
        const { getFieldsValue, setFieldsValue } = this.props.form
        var remark = getFieldsValue().remark
        if (remark === '' ||
            remark === undefined
        ) {
            message.warning('请输入评论内容', 1)
            return false
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userId 
        + "&uniquekey=" + this.props.uniquekey 
        + "&commnet=" + getFieldsValue().remark, myFetchOptions)
            .then((response) => { 
                return response.json() 
            })
            .then((json) => {
                this.componentDidMount()
                notification['success']({ 
                    message: 'ReactNews 提醒',
                    description: '评论成功',
                    style: {
                        "marginRight": "0",
                        "color": 'red'
                    }
                })
                setFieldsValue({ 'remark': '' })
                return true
            })
    }
    addUserCollection(e) {
        e.preventDefault()
        var myFetchOptions = {
            method: 'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userId 
            + "&uniquekey=" + this.props.uniquekey, myFetchOptions)
            .then((response) => { 
                return response.json() 
            })
            .then((json) => {
            // 收藏成功以后进行一下全局的提醒
                notification['success']({ 
                    message: 'ReactNews 提醒',
                    description: '收藏此文章成功',
                    style: {
                        'marginRight': '0',
                        'color': 'red'
                    }
                })
            })
    }   
    render() {
        const { getFieldDecorator } = this.props.form
        const { comments } = this.state
        var getcomments = (arr) => {
            return arr.map((comment, index) => { 
                return (
                    <Card key ={ index } title = { comment.UserName } extra = { <a href = '#' > 发布于 { comment.datetime } </a> }>
                        <p>{comment.Comments}</p>
                    </Card>
                ) 
            })
        }
        const commnetList = comments.length
            ?
            comments.length > 10 ?
                getcomments(comments.slice(-3, comments.length))
                :
                getcomments(comments)
            : 
            '没有加载到任何评论'
        return (
            <div className = 'comment'>
                <Row>
                    <Col span = { 24 }>
                        {commnetList}
                        <Form onSubmit = { this.handleSubmit.bind(this) }>
                            {/* 通过getFieldDecorator 的id remark1 构成 getFieldsValue 中的值*/}
                            <FormItem label = '您的评论'> 
                                {getFieldDecorator('remark', {
                                    initialValue: '',
                                    rules: [{ 
                                        required: true, message: 'Please input your comments!'
                                    }]
                                })(
                                    <TextArea placeholder = '随便写' autosize = {{ minRows: 3, maxRows: 6 }} />
                                )}
                            </FormItem> 
                            <Button type = 'primary' htmlType = 'submit'>提交评论</Button>
							&nbsp;&nbsp;
                            <Button type = 'primary' htmlType = 'button' onClick = { this.addUserCollection.bind(this) }>收藏该文章</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}
const CommonComments = Form.create({})(CommonComments_)
export { CommonComments }