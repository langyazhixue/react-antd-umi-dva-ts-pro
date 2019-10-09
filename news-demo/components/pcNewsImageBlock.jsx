import React, { Component } from 'react'
import { Card } from 'antd'
import { Link, Route } from 'react-router-dom'
import 'babel-polyfill'
class ComponentPcImagesBlock extends Component {
    constructor() {
        super()
        this.state = {
            news: ''
        }
    }
    componentWillMount() {
        let myFetchOptions = {
            method: 'GET'
        }
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=' + this.props.type + '&count=' + this.props.count, myFetchOptions)
            .then((response) => {
                // console.log(response)
                return response.json()
            })
            .then((json) => {
                // console.log(21)
                this.setState({
                    news: json
                })
            })
    }
    render() {
        let imageStyle = {
            display: 'block',
            width: this.props.imageWidth,
            height: '90px'
        }
        let styleH3 = {
            width: this.props.imageWidth,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            fontSize: '14px',
            color: '#222'
        }
        let news = this.state.news
        let newsList = news.length
            ?
            news.map((newsItem, index) => {
                return (
                    <div class = 'imageBlock ' key = { index }>
                        <Link to = { `/details/${ newsItem.uniquekey }` }>
                            <div class = 'custome-img'>
                                <img src = { newsItem.thumbnail_pic_s } style = { imageStyle }/>
                            </div>
                            <div class = 'custome-card'>
                                <h6 style = { styleH3 }>{ newsItem.title }</h6>
                                <p>{ newsItem.author_name }</p>
                            </div>
                        </Link>
                    </div>
                )
            })
            :
            '没有加载到任何数据'

        return (
            <div class = 'pcTopNewsImageList clearfix'>
                <Card title = { this.props.cardTitle } bordered = { true } style = {{ width: this.props.width }}>
                    { newsList }
                </Card>
            </div>
        )
    }
}

export { ComponentPcImagesBlock }