import React, { Component } from 'react'
import { v1 as uuidv1 } from 'uuid'
import './ImageSlideshow.scss'
import img01 from '../../assets/landing-page/01.jpg'
import img02 from '../../assets/landing-page/02.jpg'
import img03 from '../../assets/landing-page/03.jpg'
import img04 from '../../assets/landing-page/04.jpg'
import img05 from '../../assets/landing-page/05.jpg'
import img06 from '../../assets/landing-page/06.jpg'
import img07 from '../../assets/landing-page/07.jpg'
import img08 from '../../assets/landing-page/08.jpg'


const images = [
    {
        src: img01
    },
    {
        src: img02
    },
    {
        src: img03
    },
    {
        src: img04
    },
    {
        src: img05
    },
    {
        src: img06
    },
    {
        src: img07
    },
    {
        src: img08
    },

]

const transition = `transform 0.5s ease-in-out`


export class ImageSlideshow extends Component {
    constructor() {
        super();
        this.state = {
            imageCounter: 0,
            imageArray: [],
            windowWidth: window.innerWidth,
            transition: `transform 0.5s ease-in-out`
        }
    }

    componentDidMount() {
        this.setState({ imageArray: [...images] })
        window.addEventListener('resize', () => {
            this.setState({ windowWidth: window.innerWidth })
        })

        this.refs.imageslideshow.addEventListener('transitionend', () => {
            if (this.state.imageCounter === images.length) {
                this.setState({
                    imageCounter: 0,
                    transition: 'none'
                })
            }
        })

        this.interval = setInterval(() => {
            this.setState({
                transition: transition,
                imageCounter: this.state.imageCounter + 1,
            })
        }, 16000)
    }

    render() {
        return (
            <div
                className="imageslideshow-container"
                style={{ transform: `translateX(${this.state.imageCounter * -this.state.windowWidth}px)`, transition: this.state.transition }}
                ref='imageslideshow'
            >
                {this.state.imageArray.map(item => {
                    return (
                        <div className="imageslideshow-item" >
                            <img
                                src={item.src}
                                alt={`sliderImage${images.indexOf(item)}`}
                                key={uuidv1()}
                            />
                        </div>
                    )
                })}
                <div className="imageslideshow-item" >
                    <img
                        src={images[0].src}
                        alt={`sliderImage0`}
                        key={uuidv1()}
                    />
                </div>
            </div>
        )
    }
}

export default ImageSlideshow

