import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { ComponentPcIndex } from './components/pcIndex' 
import { ComponentPcNewsDetails } from './components/pcNewsDetails'
import { ComponentMobileIndex } from './components/mobileIndex' 
import { ComponentMobileNewsDetails } from './components/mobileNewsDetails'
import { PcUserCenter } from './components/pcUserCenter'
import { ComponentMobileUserCenter } from './components/mobileUserCenter'
import antecss from 'antd/dist/antd.less'
// import themecss from '../theme/your-theme-file'
let div = document.createElement('div')
div.setAttribute('id', '')
document.body.appendChild(div)

class Root extends Component {
    render() {
        return (
            // <Router history = { hashHistory }>
            //     <Route>
            //         <Route component = { ComponentMobileIndex } path = '/' ></Route>
            //     </Route>
            // </Router>
            <div>
                <MediaQuery minDeviceWidth = { 1224 }>
                    <Router>
                        <div>
                            <Switch>
                                <Route exact path = '/' component = { ComponentPcIndex }></Route>
                                <Route path = '/details/:uniquekey' component = { ComponentPcNewsDetails }></Route>
                                <Route path = '/pcUserCenter' component = { PcUserCenter }></Route>
                            </Switch>
                        </div>
                    </Router>
                </MediaQuery>
                <MediaQuery maxDeviceWidth = { 1224 }>
                    <Router >
                        <div>
                            <Switch>>
                                <Route exact path = '/' component = { ComponentMobileIndex }></Route>
                                <Route path = '/details/:uniquekey' component = { ComponentMobileNewsDetails }></Route>
                                <Route path = '/mobileUserCenter' component = { ComponentMobileUserCenter }></Route>
                            </Switch>
                        </div>
                    </Router>
                </MediaQuery>
            </div>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'))