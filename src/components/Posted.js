import React from 'react';
import Post from './Post.js';
import ProfilePic from './img/logo.jpg';
import '../App.css';


function Posted() {
    const details = [
        { name: "joshua", message: "hello world" },
        { name: "ode", message: "badabing" },
        { name: "nobu", message: "nyef nyef shinhzyuu nada de shku tski" },
        { name: "nagi", message: "badabingjkhjewh hewgj hjewh jhewhjew wev wehew " },
        { name: "lolo", message: "nyef hehejkwjew jkewhjh nyef" },
        { name: "mbambi", message: "yao yap yoo" }
    ];

    return (
        details.map(
            (posted) => {
                return (
                    <div className="posted">
                        <div className="profileImg">
                            <img src={ProfilePic} alt="" />
                        </div>
                        <Post name={posted.name} post={posted.message} />
                    </div>
                )
            }
        )
    );
}

export default Posted;