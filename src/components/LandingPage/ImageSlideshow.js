import React, { Component } from 'react'
import { v1 as uuidv1 } from 'uuid'
import './ImageSlideshow.scss'


const images = [
    {
        src: 'https://www.digitalarch.pl/static/media/88.7f6c38f6.jpg'
    },
    {
        src: 'https://www.digitalarch.pl/static/media/87.1149d03e.jpg'
    },
    {
        src: 'https://www.digitalarch.pl/static/media/83.c8822fbc.jpg'
    },
    {
        src: 'https://www.digitalarch.pl/static/media/88.7f6c38f6.jpg'
    },

]


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
            if (this.state.imageCounter === 3) {
                this.setState({
                    imageCounter: 0,
                    transition: 'none'
                })
            }
        })
        this.interval = setInterval(() => {
            if (this.state.imageCounter === 3) {
                this.setState({
                    transition: 'transform 1s ease-in-out',
                    imageCounter: 0,
                })
            }
            else {
                this.setState({
                    transition: 'transform 1s ease-in-out',
                    imageCounter: this.state.imageCounter + 1,
                })
            }
        }, 6000)
    }

    nextImage = () => {
        if (this.state.imageCounter === 3) {
            this.setState({
                transition: 'transform 0.2s ease-in-out',
                imageCounter: 0,
            })
        }
        else {
            this.setState({
                transition: 'transform 0.2s ease-in-out',
                imageCounter: this.state.imageCounter + 1
            })
        }

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
            </div>
        )
    }
}

export default ImageSlideshow

