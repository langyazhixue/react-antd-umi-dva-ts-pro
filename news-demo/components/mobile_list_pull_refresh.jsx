import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Link, Route } from 'react-router-dom'
import ReactPullToRefresh from 'react-pull-to-refresh'
// import 'babel-polyfill'
class ComponentMobileListPullRefresh extends Component {
    constructor() {
        super()
        this.state = {
            news: '',
            count: 5
        }
    }
    componentWillMount() {
        let myFetchOptions = {
            method: 'GET'
        }
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=' + this.props.type + '&count=' + this.state.count, myFetchOptions)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                this.setState({
                    news: json
                })
            })
    }
    handleRefresh(resolve, reject) {
        var myFetchOptions = {
            method: 'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=yule&count=20", myFetchOptions).then((response) => response.json())
            .then((json) => {
                this.setState({ 
                    news: json 
                })
                resolve()
            })
    }
    render() {
        // 解构赋值
        let { news, hasMore, initializing, refreshedAt } = this.state
        let newsList = news.length
            ?
            news.map((newsItem, index) => {
                return (
                    <section key = { index } class = 'm_article list-item special-section  clearfix'>
                        <Link to = { `details/${ newsItem.uniquekey }` }>
                            <div class = 'm_article_img'>
                                <img src = { newsItem.thumbnail_pic_s } alt = { newsItem.title }/>
                            </div>
                            <div class = 'm_article_info'>
                                <div class = 'm_article_info_l'>
                                    <div class = 'm_article_title'>
                                        <span>{ newsItem.title }</span>
                                    </div>
                                </div>
                                <div class = 'm_article_desc '>
                                    <div class = 'm_article_desc_l'>
                                        <span class = 'm_article_channel'>{ newsItem.realtype }</span>
                                        <span class = 'm_article_time'>{ newsItem.date }</span>
                                    </div>
                                </div>
                            </div>
                        </Link> 
                    </section>
                )
            })
            :
            '没有加载到任何数据'

        return (
            <div >
                <Row>
                    <Col span = { 24 }>
                        <ReactPullToRefresh onRefresh = { (resolve, reject) => this.handleRefresh.bind(this)(resolve, reject) } style = {{ textAlign: 'center' }}>
                            <span className = 'genericon genericon-next'></span>
                            <div>
                                {newsList}
                            </div>
                        </ReactPullToRefresh>
                        
                    </Col>
                </Row>
            </div>
        )
    }
}

export { ComponentMobileListPullRefresh }