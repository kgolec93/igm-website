import React, { Component } from 'react'
import './LandingPage.scss'

const images = [
    'https://www.digitalarch.pl/static/media/88.7f6c38f6.jpg',
    'https://www.digitalarch.pl/static/media/87.1149d03e.jpg',
    'https://www.digitalarch.pl/static/media/83.c8822fbc.jpg',
]

export class LandingPage extends Component {
    constructor() {
        super();
        this.state = {
            imageCounter: 0
        }
    }
    render() {
        return (
            <div className='landing-page-container'>
                <img src={images[0]} alt=""/>
            </div>
        )
    }
}

export default LandingPage
