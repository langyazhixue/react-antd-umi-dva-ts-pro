import React, { Component } from 'react' 
import { Link, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { 
    Row,
    Col,
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    CheckBox,
    Modal,
    Card,
    notification,
    Upload 
} from 'antd'
import { ComponentMobileHeader } from './mobileHeader.jsx'
import { ComponentMobileFooter } from './mobileFooter.jsx'
const FormItem = Form.Item
const SubMenu = Menu.SubMenu
const TabPane = Tabs.TabPane
const MenuItemGroup = Menu.ItemGroup
const TextArea = Input.TextArea
class ComponentMobileUserCenter extends Component {
    constructor () {
        super()
        this.state = {
            userCollection: '',
            usercomments: '',
            previewImage: '',
            previewVisible: false
        }
    }
    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        }
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=' + localStorage.userId, myFetchOptions)
            .then((response) => { 
                return response.json() 
            })
            .then((json) => {
                this.setState({
                    userCollection: json
                })
            })

        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=' + localStorage.userId, myFetchOptions)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                this.setState({
                    usercomments: json
                })
            })
    }
    callback = () => {
        // console.log('one')
    }
    handleCancel = () => {
        this.setState({
            previewVisible: false
        })
    }
    render = () => {
        const props = {
            action: 'http://newsapi.gugujiankong.com/handler.ashx',
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            listType: 'picture-card',
            defaultFileList: [
                {
                    uid: -1,
                    name: 'xxx.png',
                    state: 'done',
                    url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
                    thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
                }
            ],
            onPreview: (file) => {
                this.setState({ previewImage: file.url || file.thumbUrl, previewVisible: true })
            },
            onChange: (file) => {
                console.log(file.file)
                console.log(file.fileList)
                console.log(file.event)
            }
        }
        
        const { userCollection, usercomments } = this.state 
        let userCollectionList = userCollection.length 
            ?
            userCollection.map((item, index) => {
                return (
                    <Card key = { index } title = { item.uniquekey } extra = { <a href = { `/details/${ item.uniquekey }` }>查看</a> } >
                        <p> { item.Title }</p>
                    </Card>
                ) 
            })
            :
            "您还没有任何收藏，快去收藏一些文章吧"
        
        const usercommentsList = usercomments.length 
            ?
            usercomments.map((comment, index) => {
                return (
                    <Card key = { index } title = { `于 ${ comment.datetime } 评论了文章 ${ comment.uniquekey } `} extra = { <a target='_blank' href = { `/details/${ comment.uniquekey }`} >查看</a>}>
                        <p>{ comment.Comments }</p>
                    </Card>
                ) 
            })
            :
            '您还没有发表过任何评论'
        return (
            <div>
                <ComponentMobileHeader />
                <Row class = 'pcContainer'>
                    <Col span = { 24 }>
                        <Tabs defaultActiveKey = '1' onChange = { this.callback }>
                            <TabPane tab ='我的收藏' key ='1'>
                                { userCollectionList }
                            </TabPane>
                            <TabPane tab ='我的评论' key ='2'>
                                { usercommentsList }
                            </TabPane>
                            <TabPane tab = '头像设置' key = '3'>
                                <div class = 'clearfix'>
                                    <Upload {...props}>
                                        <Icon type = 'plus'/>
                                        <div className = 'ant-upload-text'>上传照片</div>
                                    </Upload>
                                    <Modal visible = { this.state.previewVisible } footer ={ null } onCancel={ this.handleCancel }>
                                        <img alt = '预览' src = { this.state.previewImage } style={{ width: '100%' }} />
                                    </Modal>
                                </div>
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row> 
                <ComponentMobileFooter/>
            </div>
        )
    }
}

export { ComponentMobileUserCenter }