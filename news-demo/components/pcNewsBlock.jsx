import React, { Component } from 'react'
import { Card } from 'antd'
import { Link, Route } from 'react-router-dom'
import 'babel-polyfill'
class ComponentPcNewsBlock extends Component {
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
                console.log(21)
                this.setState({
                    news: json
                })
            })
       

    }
    render() {
        // console.log(11)
        let news = this.state.news
        let newsList = news.length
            ?
            news.map((newsItem, index) => {
                return (
                    <li key = { index }>
                        <Link to = { `details/${ newsItem.uniquekey }` }>
                            { newsItem.title }
                        </Link> 
                    </li>
                )
            })
            :
            '没有加载到任何数据'

        return (
            <div class = 'pcTopNewsList'>
                <Card width = { this.props.width } bordered = { this.props.bordered }>
                    <ul>
                        { newsList }
                    </ul>
                </Card>
            </div>
        )
    }
}

export { ComponentPcNewsBlock }