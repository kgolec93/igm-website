import React, { Component } from 'react'
import './LandingPage.scss'
import ImageSlideshow from './ImageSlideshow';


export class LandingPage extends Component {

    render() {
        return (
            <div className='landing-page-container'>
                <ImageSlideshow />
                {/* <div style={{minHeight: '100vh'}}>

                </div> */}
            </div>
        )
    }
}


export default LandingPage
