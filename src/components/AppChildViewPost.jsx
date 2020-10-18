import React from 'react'

export default class AppChildViewPost extends React.Component {
    render() {
        console.log('AppChildViewPost::', this.props.clickedObject)
        return (
            <div>
                Details section
            </div>
        )
    }
}