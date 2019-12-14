import React, { Component } from 'react'
import arrow from '../../../assets/icons/slideshow/arrow.svg'
import fullscreen from '../../../assets/icons/slideshow/fullscreen.svg'
import close from '../../../assets/icons/slideshow/close.svg'
import { ImageDot } from '../../misc/ImageDot'

const transition = `transform 0.3s ease-in-out`

export class ImageSlider extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            windowWidth: null,
            imageCounter: 1,
            dotCounter: 0,
            transition: transition,
            fullscreen: false
        }
    }
    componentDidMount() {
        this.setState({ data: this.props.data })
        setTimeout(() => {
            this.setState({ windowWidth: this.refs.imageContainer.clientWidth })
            this.refs.imageSlideshow.addEventListener('transitionend', () => {
                if (this.state.imageCounter === this.state.data.images.length + 1) {
                    this.setState({
                        imageCounter: 1,
                        dotCounter: 0,
                        transition: 'none'
                    })
                    setTimeout(() => {
                        this.setState({ transition: transition })
                    }, 300)
                }
                else if (this.state.imageCounter === 0) {
                    this.setState({
                        imageCounter: this.state.data.images.length,
                        dotCounter: this.state.data.images.length - 1,
                        transition: 'none'
                    })
                }
            })
        }, 500)

        window.addEventListener('resize', this.resizeWindow, false)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeWindow, false)
    }

    resizeWindow = () => {
        this.setState({ windowWidth: this.refs.imageContainer.clientWidth })
    }

    changeImage = (e) => {
        if (e === `prev`) {
            if (this.state.imageCounter === 0) {
                this.setState({ transition: transition, imageCounter: this.state.data.images.length })
            }
            else {
                this.setState({ transition: transition, imageCounter: this.state.imageCounter - 1, dotCounter: this.state.dotCounter - 1 })
            }
        }


        else if (e === `next`) {
            if (this.state.imageCounter === this.state.data.images.length + 1) {
                this.setState({ transition: transition, imageCounter: 1 })
            }
            else {
                this.setState({ transition: transition, imageCounter: this.state.imageCounter + 1, dotCounter: this.state.dotCounter + 1 })

            }
        }


    }


    render() {
        if (this.state.data === null) {
            return (
                <div>loading</div>
            )
        }
        else {
            return (
                <div className={`imageContainer ${this.state.fullscreen ? 'fullscreen' : ''}`} ref='imageContainer'>
                    <div
                        style={{ transform: `translateX(${this.state.imageCounter * -this.state.windowWidth}px)`, transition: this.state.transition }}
                        className="sliderContainer"
                        ref='imageSlideshow'
                    >
                        <div className="slideshowItem">
                            <img
                                style={{ width: `${this.state.windowWidth}px` }}
                                src={this.state.data.images[this.state.data.images.length - 1]}
                                alt={`img-${this.state.data.images.length - 1}`}
                            />
                        </div>
                        {
                            this.state.data.images.map(item => {
                                return (
                                    <div className="slideshowItem">
                                        <img
                                            style={{ width: `${this.state.windowWidth}px` }}
                                            src={item}
                                            alt={`img-${this.state.data.images.indexOf(item)}`}
                                        />
                                    </div>
                                )
                            })
                        }
                        <div className="slideshowItem">
                            <img
                                style={{ width: `${this.state.windowWidth}px` }}
                                src={this.state.data.images[0]}
                                alt={`img-0`}
                            />
                        </div>
                    </div>
                    <div className='sliderControls' id="prevArrow">
                        <img onClick={() => this.changeImage('prev')} src={arrow} alt="" />
                    </div>
                    <div className='sliderControls' id="nextArrow">
                        <img onClick={() => this.changeImage('next')} src={arrow} alt="" />
                    </div>
                    {
                        this.state.fullscreen ?
                            <img onClick={() => this.setState({ windowWidth: this.state.initialWidth, fullscreen: false })}
                                src={close} alt=""
                                className="fullscreenIcon"
                            />
                            :
                            <img onClick={() => this.setState({ initialWidth: this.state.windowWidth, windowWidth: window.innerWidth, fullscreen: true })}
                                src={fullscreen} alt=""
                                className="fullscreenIcon"
                            />
                    }
                    <div className="dotsContainer">
                        <ul>
                            {this.state.data.images.map(item => {
                                return (
                                    <li onClick={(() => {
                                        this.setState(
                                            {
                                                dotCounter: this.state.data.images.indexOf(item),
                                                imageCounter: this.state.data.images.indexOf(item) + 1
                                            }

                                        )
                                    })} >
                                    <ImageDot
                                        isActive={this.state.data.images.indexOf(item) === this.state.dotCounter ? true : false}
                                    />
                                    </li>
                        )
                    })}

                        </ul>
                </div>
                </div >
            )
        }
    }
}

export default ImageSlider
