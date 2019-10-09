import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Link, Route } from 'react-router-dom'
import Tloader from 'react-touch-loader'

// import 'babel-polyfill'
class ComponentMobileNewsList extends Component {
    constructor() {
        super()
        this.state = {
            news: '',
            count: 5,
            hasMore: 0,
            initializing: 1,
            refreshedAt: Date.now()
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
    loadMore(resolve) {
        // console.log(resolve)
        setTimeout(() => {
            // console.log(this.state)
            // console.log(this)
            var count = this.state.count
            this.setState({
                count: count + 5
            })
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
            this.setState({
                hasMore: count > 0 && count < 20
            })    
            resolve()
        }, 2e3)
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                hasMore: 1,
                initializing: 2
            })
        }, 1e3)
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
                        <Tloader 
                            className = 'main'
                            onLoadMore = {(resolve) => this.loadMore.bind(this)(resolve)}
                            hasMore = { hasMore }
                            initializing = { initializing }
                        >{ newsList }
                        </Tloader>
                        
                    </Col>
                </Row>
            </div>
        )
    }
}

export { ComponentMobileNewsList }