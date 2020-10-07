import React from 'react';
import Posted from './Posted.js';
import '../App.css';

function ExpandPost(){
    return (
        <div className="expandPost">
            <h1 className="post">EXPANDED pppPOST</h1>
            <Posted />
        </div>
    )
}

export default ExpandPost;