import React from 'react'

class AppChildPost extends React.Component {
    clickHandler() {
        this.props.clicked(
            this.props.id
        )
    }

    colorHandler() {
        this.props.color(this.props.id)
    }

    render() {
        return (
            <li>
                <button
                    onClick={
                        () => {
                            return (
                                this.clickHandler(),
                                this.colorHandler()
                            )
                        }
                    }
                    style={
                        this.props.isActive 
                            ? {color: "red"} 
                            : {color:"black"}
                    }
                    
                >
                    {this.props.name}

                </button>
            </li>
        )
    }
}

export default AppChildPost;
