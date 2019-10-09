import React, { Component } from 'react'
import { ComponentMobileHeader } from './mobileHeader.jsx'
import { ComponentMobileFooter } from './mobileFooter.jsx'
import { ComponentMobileNewsList } from './mobileList.jsx'
import _mobilecss from '../../css/mobile'
import { 
    Tabs,
    Carousel
} from 'antd'
import { ComponentMobileListPullRefresh } from './mobile_list_pull_refresh'
import carousel_1 from '../../images/carousel_1.jpg'
import carousel_2 from '../../images/carousel_2.jpg'
import carousel_3 from '../../images/carousel_3.jpg'
import carousel_4 from '../../images/carousel_4.jpg'
const TabPane = Tabs.TabPane
class ComponentMobileIndex extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    callback(key) {
        return key
    }
    render() {
        const settings = {
            dots: true,
            speed: 500,
            autoplay: false,
            infinite: true,
            slideToShow: 1
        }
        return (
            <div>
                <ComponentMobileHeader />
                <Tabs defaultActiveKey = 'news' onChange = { this.callback.bind(this) } class = ''>
                    <TabPane tab = '头条' key = 'news'>
                        <Carousel { ...settings } class = 'carousel'>
                            <div>
                                <img src = { carousel_1 } alt=''/>
                            </div>
                            <div>
                                <img src = { carousel_2 } alt=''/>
                            </div>
                            <div>
                                <img src = { carousel_3 } alt=''/>
                            </div>
                            <div>
                                <img src = { carousel_4 } alt=''/>
                            </div>
                        </Carousel>
                        <ComponentMobileNewsList type = 'top' count = '20' />
                    </TabPane>
                    <TabPane tab = '社会' key = 'society'>
                        <Carousel { ...settings } class = 'carousel'>
                            <div>
                                <img src = { carousel_1 } alt=''/>
                            </div>
                            <div>
                                <img src = { carousel_2 } alt=''/>
                            </div>
                            <div>
                                <img src = { carousel_3 } alt=''/>
                            </div>
                            <div>
                                <img src = { carousel_4 } alt=''/>
                            </div>
                        </Carousel>
                        <ComponentMobileListPullRefresh type = 'shehui' count = '20' />
                    </TabPane>
                    <TabPane tab = '国内' key = 'domestic'>
                        <Carousel { ...settings } class = 'carousel'>
                            <div>
                                <img src = { carousel_1 } alt=''/>
                            </div>
                            <div>
                                <img src = { carousel_2 } alt=''/>
                            </div>
                            <div>
                                <img src = { carousel_3 } alt=''/>
                            </div>
                            <div>
                                <img src = { carousel_4 } alt=''/>
                            </div>
                        </Carousel>
                        <ComponentMobileNewsList type = 'guonei' count = '20' />
                    </TabPane>
                    <TabPane tab = '国外' key = 'foreign'>
                        <Carousel { ...settings } class = 'carousel'>
                            <div>
                                <img src = { carousel_1 } alt=''/>
                            </div>
                            <div>
                                <img src = { carousel_2 } alt=''/>
                            </div>
                            <div>
                                <img src = { carousel_3 } alt=''/>
                            </div>
                            <div>
                                <img src = { carousel_4 } alt=''/>
                            </div>
                        </Carousel>
                        <ComponentMobileNewsList type = 'guoji' count = '20' />
                    </TabPane>
                    <TabPane tab = '娱乐' key = 'fun'>
                        <Carousel { ...settings } class = 'carousel'>
                            <div>
                                <img src = { carousel_1 } alt='' class='.'/>
                            </div>
                            <div>
                                <img src = { carousel_2 } alt=''/>
                            </div>
                            <div>
                                <img src = { carousel_3 } alt=''/>
                            </div>
                            <div>
                                <img src = { carousel_4 } alt=''/>
                            </div>
                        </Carousel>
                        <ComponentMobileNewsList type = 'yule' count = '20' />
                    </TabPane>
                </Tabs>
                <ComponentMobileFooter />
            </div>
        )
    }
}

export { ComponentMobileIndex }