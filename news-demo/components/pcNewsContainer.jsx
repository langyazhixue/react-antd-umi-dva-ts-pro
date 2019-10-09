import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { 
    Carousel,
    Menu,
    Icon, 
    Tabs, 
    Form, 
    message, 
    Input, 
    Button, 
    CheckBox,
    Modal,
    Card 
} from 'antd'
import { ComponentPcNewsBlock } from './pcNewsBlock.jsx'
import { ComponentPcImagesBlock } from './pcNewsImageBlock.jsx'
import carousel_1 from '../../images/carousel_1.jpg'
import carousel_2 from '../../images/carousel_2.jpg'
import carousel_3 from '../../images/carousel_3.jpg'
import carousel_4 from '../../images/carousel_4.jpg'
const React = require('react')

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const FormItem = Form.Item
const TabPane = Tabs.TabPane


class ComponentPcNewsContainer extends React.Component {
    render() {
        const settings = {
            dots: true,
            speed: 500,
            autoplay: true,
            infinite: true,
            slideToShow: 1
        }

        return (
            <Row>
                <Col span = { 2 }></Col>
                <Col span = { 20 } class = 'pcNewsContainer'>
                    <div class = 'pcNewsContainer-left'>
                        <Carousel { ...settings }>
                            <div>
                                <img src = { carousel_1 }/>
                            </div>
                            <div>
                                <img src = { carousel_2 }/>
                            </div>
                            <div>
                                <img src= { carousel_3 } />
                            </div>
                            <div>
                                <img src = { carousel_4 }/>
                            </div>
                        </Carousel>
                        <ComponentPcImagesBlock type = 'guoji' count = '6' imageWidth = '112px' width = '400px' cardTitle = '国际'/>
                        <ComponentPcImagesBlock type = 'yule' count = '15' imageWidth = '112px' width = '400px' cardTitle = '娱乐'/>
                    </div>
                    <Tabs defaultActiveKey = 'news'>
                        <TabPane tab = '头条' key = 'news' >
                            <ComponentPcNewsBlock type = 'top' count = '40' width = '100%' bordered = { false }/>
                        </TabPane>
                        <TabPane tab = '社会' key = 'society' >
                            <ComponentPcNewsBlock type = 'shehui' count = '40' width = '100%' bordered = { false }/>
                        </TabPane>
                        <TabPane tab = '国际' key = 'domestic' >
                            <ComponentPcNewsBlock type = 'guoji' count = '40' width = '100%' bordered = { false }/>
                        </TabPane>
                    </Tabs>
                </Col>
                <Col span = { 2 }></Col>
            </Row>
        )
    }
}

export { ComponentPcNewsContainer }