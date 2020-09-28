import React from 'react';
import '../App.css';

function Post (props) {
    
    return(
        <div className="post">
            <h2>{props.name}</h2>
            <p> {props.post} </p>
        </div>
    );
}

export default Post;