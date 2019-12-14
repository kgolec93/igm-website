import React from 'react'
import './ImageDot.scss'

export const ImageDot = (props) => {
    return (
        <svg version="1.1" className='dotSvg' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32" width='32px' height='32px'>
        <polygon className={`dot ${props.isActive ? 'active' : ''}`} points="16,2 28.2,9 28.2,23 16,30 3.8,23 3.8,9 "/>
        </svg>
    )
}
