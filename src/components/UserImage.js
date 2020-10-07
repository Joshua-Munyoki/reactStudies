import React from 'react';
import '../App.css';

const allImages = [
    { id: 1, src: {'./img/gold.png'} },
    { id: 2, src: './img/green.jpg' },
    { id: 3, src: './img/grey.jpg' },
    { id: 4, src: './img/logo.jpg' },
    { id: 5, src: './img/blue.jpg' },
    { id: 6, src: './img/orange.png' },
    { id: 7, src: './img/pink.jpg' },
    { id: 1, src: './img/profileImg.png' },
    { id: 1, src: './img/red.jpg' },
    { id: 1, src: './img/yellow.jpg' }
];

function UserImage() {
    <div className="profileImg">
        <img src={allImages[0].src} alt="" />
    </div>
}

export default UserImage;