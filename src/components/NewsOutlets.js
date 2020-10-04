import React, { Component } from 'react'
import Outlet from './Outlet'

export class NewsOutlets extends Component {

    render() {
        
        return this.props.newsOutlets.map((outlet) => (
            <Outlet 
                key={outlet.id} 
                outlet={outlet}
                selectOutlet={this.props.selectOutlet}/>
        ));
    }
}

export default NewsOutlets
