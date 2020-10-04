import React, { Component } from 'react'

export class Outlet extends Component {
    render() {
        const {name, id} = this.props.outlet
        return (
            <button onClick={this.props.selectOutlet.bind(this, id)} style={btnStyle}>{name}</button>
            )
    }
}

const btnStyle = {
    display: "inline",
    padding: "1rem",
    margin: "1rem"
}

export default Outlet
