import React from 'react'

export default class AppChildViewPost extends React.Component {
    render() {
        console.log('AppChildViewPost::', this.props.clickedObject)
        return this.props.clickedObject
            ? (
                <div>
                    {this.props.clickedObject.name}
                </div>
            )
            : (
                <div> nothing clicked </div>
            )
    }
}