import React, { Component } from 'react';
import New from './New.js';

class Newstuff extends Component {
    constructor() {
        super()
        this.state = {
            message: "button not clicked by"
        }
    }

    newMessage() {
        this.setState(
            {message: "button was clicked by"}
        )
    }

    render() {
        return (
            <div>
                <h3>
                    {this.state.message}
                    <New names={"josh"} />
                </h3>
                <button onClick={() => this.newMessage()}>click me</button>
            </div>

        );
    }
}

export default Newstuff;