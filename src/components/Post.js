import React from 'react';
import '../App.css';

function Post(props) {

    
    return (
        
            <div className="post">
                <h2 className="name">{props.name}</h2>
                <p className="message">{props.message}</p>
            </div>
        
    );
}

export default Post;