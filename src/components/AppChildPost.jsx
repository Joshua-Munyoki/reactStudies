import React from 'react'

class AppChildPost extends React.Component {
    clickHandler() {
        this.props.clicked(
            this.props.id,
        )
    }

    render() {
        return (
            <li>
                <button
                    onClick={() => this.clickHandler()}
                >
                    {this.props.name}
                </button>
            </li>
        )
    }
}

export default AppChildPost;
