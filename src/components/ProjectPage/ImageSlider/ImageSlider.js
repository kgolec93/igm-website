import React, { Component } from 'react'
import arrow from '../../../assets/svg/imageArrow.svg'
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
            transition: transition
        }
    }
    componentDidMount() {
        this.setState({ data: this.props.data })
        setTimeout(() => {
            ////stays local
            this.setState({ windowWidth: this.refs.imageContainer.clientWidth })
            ////////

            this.refs.imageSlideshow.addEventListener('transitionend', () => {
                if (this.props.imageCounter === this.props.images.length + 1) {
                    this.props.transitionEnd(1, 0, 'none');
                }
                else if (this.props.imageCounter === 0) {
                    this.props.transitionEnd(this.props.images.length, 0, 'none');
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

    render() {
        if (this.state.data === null) {
            return (
                <div>loading</div>
            )
        }
        else {
            return (
                <div className={`imageContainer`} ref='imageContainer'>
                    <div
                        style={{ transform: `translateX(${this.props.imageCounter * -this.state.windowWidth}px)`, transition: this.props.transition }}
                        className="sliderContainer"
                        ref='imageSlideshow'
                    >
                        <div className="slideshowItem">
                            <img
                                style={{ width: `${this.state.windowWidth}px` }}
                                src={this.props.images[this.props.images.length - 1]}
                                alt={`img-${this.props.images.length - 1}`}
                            />
                        </div>
                        {
                            this.props.images.map(item => {
                                return (
                                    <div className="slideshowItem">
                                        <img
                                            style={{ width: `${this.state.windowWidth}px` }}
                                            src={item}
                                            alt={`img-${this.props.images.indexOf(item)}`}
                                        />
                                    </div>
                                )
                            })
                        }
                        <div className="slideshowItem">
                            <img
                                style={{ width: `${this.state.windowWidth}px` }}
                                src={this.props.images[0]}
                                alt={`img-0`}
                            />
                        </div>
                    </div>
                    <div className='sliderControls' id="prevArrow">
                        <img onClick={() => this.props.slideImage('prev')} src={arrow} alt="" />
                    </div>
                    <div className='sliderControls' id="nextArrow">
                        <img onClick={() => this.props.slideImage('next')} src={arrow} alt="" />
                    </div>

                    <img onClick={this.props.openFullscreen.bind(this)}
                        src={fullscreen} alt=""
                        className="fullscreenIcon"
                    />

                    {/* <div className="dotsContainer">
                        <ul>
                            {this.props.images.map(item => {
                                return (
                                    <li onClick={(() => {
                                        this.setState(
                                            {
                                                dotCounter: this.state.data.images.indexOf(item),
                                                imageCounter: this.state.data.images.indexOf(item) + 1,
                                                transition: transition
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
                    </div> */}
                </div >
            )
        }
    }
}

export default ImageSlider
