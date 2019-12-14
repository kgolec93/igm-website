import React, { Component } from 'react'
import { LogoSvg } from '../LogoSvg/LogoSvg'
import './LoaderPage.scss'

export class LoaderPage extends Component {
    render() {
        return (
            <div className='loaderContainer'>
                <LogoSvg />
                <div className="headerContainer">
                    <h1>IGM_Architekci</h1>
                </div>
            </div>
        )
    }
}

export default LoaderPage
