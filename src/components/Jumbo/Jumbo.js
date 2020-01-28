import React from 'react'
import './Jumbo.scss'
import { Parallax, Background } from 'react-parallax'

export const Jumbo = (props) => {
    return (
        <Parallax
            className="jumboContainer"
            strength={200}
            bgImage={props.bgImage}
            bgImageAlt={props.alt}
        >
            <div className="contentWrapper">
                <div className="headerBar">
                    <h1>
                        {props.header}
                    </h1>
                </div>
            </div>
        </Parallax>
    )
}

export default Jumbo