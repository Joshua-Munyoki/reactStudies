import React, { Component } from 'react';
import '../App.css';

class New extends Component {
    render() {
        return (
            <div>
                <h3> {this.props.names}</h3>
            </div>
        );
    }
}
 
export default New;