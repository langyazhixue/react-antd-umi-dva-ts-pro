import React, { Component } from 'react'
import { Row, Col, BackTop } from 'antd'
import ReactDom from 'react-dom'
import { ComponentMobileHeader } from './mobileHeader.jsx'
import { ComponentMobileFooter } from './mobileFooter.jsx'
import { CommonComments } from './commonComments'
class ComponentMobileNewsDetails extends Component {
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
                console.log(response)
                return response.json()
            })
            .then((json) => {
                this.setState({
                    newsItem: json
                })
                document.title = this.state.newsItem.title 
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
                <ComponentMobileHeader />
                <Row>
                    <Col span = { 24 } className = 'm_detailsContainer'>
                        <div className = 'm_articleContainer' dangerouslySetInnerHTML = { this.createMarkup() }></div>
                        <CommonComments uniquekey = { this.props.match.params.uniquekey }/>
                    </Col>
                </Row>
                <ComponentMobileFooter />
                <BackTop/>
            </div>
            
        )
    }
}

export { ComponentMobileNewsDetails }