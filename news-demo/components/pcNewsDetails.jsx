import React, { Component } from 'react'
import { Row, Col, BackTop } from 'antd'
import ReactDom from 'react-dom'
import { ComponentPcHeader } from './pcHeader' 
import { ComponentPcFooter } from './pcFooter'
import { ComponentPcImagesBlock } from './pcNewsImageBlock'
import { CommonComments } from './commonComments'

class ComponentPcNewsDetails extends Component {
    constructor() {
        super()
        this.state = {
            newsItem: ''
        }
    }
    componentDidMount() {
        let myFetchOptions = {
            method: 'GET'
        }
        // console.log(this.props.match.params.uniquekey)
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=' + this.props.match.params.uniquekey, myFetchOptions)
            .then((response) => {
                // console.log(response)
                return response.json()
            })
            .then((json) => {
                this.setState({
                    newsItem: json
                })
                document.title = this.state.newsItem.title + '- React News | React 驱动的项目平台'
            })
            .catch((res) => {
                // console.log(res)
            })
    }
    
    createMarkup() {
        return {
            __html: this.state.newsItem.pagecontent 
        }
    }
    render() {
        return (
            <div>
                <ComponentPcHeader />
                <Row>
                    <Col span = { 2 }></Col>
                    <Col span = { 14 } className = 'detailsContainer'>
                        <div className = 'articleContainer' dangerouslySetInnerHTML = { this.createMarkup() }></div>
                        < CommonComments uniquekey = { this.props.match.params.uniquekey } />
                    </Col>
                    <Col span = { 6 }>
                        <ComponentPcImagesBlock type = 'guoji' count = '20' imageWidth = '150px' width = '100%' cardTitle = '相关新闻'/>
                    </Col>
                    <Col span = { 2 }></Col>
                </Row>
                <ComponentPcFooter />
                <BackTop />
            </div>
        )
    }
}

// export { ComponentPcNewsDetails }
module.exports = {
    ComponentPcNewsDetails
}