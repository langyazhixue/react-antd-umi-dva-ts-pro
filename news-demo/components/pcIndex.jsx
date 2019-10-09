import React, { Component } from 'react'
import { ComponentPcHeader } from './pcHeader.jsx' 
import { ComponentPcFooter } from './pcFooter.jsx'
import { ComponentPcNewsContainer } from './pcNewsContainer.jsx' 
import pccss from '../../css/pc'
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane

class ComponentPcIndex extends Component {
    render() {
        return (
            <div>
                <ComponentPcHeader />
                <ComponentPcNewsContainer />
                <ComponentPcFooter />
            </div>
        )
    }
}

export { ComponentPcIndex }
