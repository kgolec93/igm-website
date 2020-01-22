import React, { Component } from 'react'
import arrow from '../../../assets/svg/imageArrow.svg'
import fullscreen from '../../../assets/svg/imageFullscreen.svg'
import { ImageDot } from '../../misc/ImageDot'

const transition = `transform 0.3s ease-in-out`

export class ImageSlider extends Component {
    constructor() {
        super();
        this.state = {
            windowWidth: null,
            imageCounter: 1,
            dotCounter: 0,
            transition: transition,
            delta: 0
        }
    }
    componentDidMount() {
        setTimeout(() => {

            this.setState({ windowWidth: this.refs.imageContainer.clientWidth })
            this.refs.imageSlideshow.addEventListener('transitionend', () => {
                if (this.props.imageCounter === this.props.images.length + 1) {
                    this.props.transitionEnd(1, 0, 'none');
                }
                else if (this.props.imageCounter === 0) {
                    this.props.transitionEnd(this.props.images.length, 0, 'none');
                }
            })
        }, 500)
        this.setState({ windowWidth: this.refs.imageContainer.clientWidth })

        window.addEventListener('resize', this.resizeWindow, false)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeWindow, false)
    }

    resizeWindow = () => {
        this.setState({ windowWidth: this.refs.imageContainer.clientWidth })
    }

    startDrag = (e) => {
        this.props.drag('none');
        e.preventDefault();
        if (e.type === 'touchstart') {
            this.setState({ initialX: e.touches[0].clientX, dragActive: true })
        }
        else {
            this.setState({ initialX: e.clientX, dragActive: true })
        }

    }

    handleDrag = (e) => {
        if (this.state.dragActive) {
            if (e.type === 'touchmove') {
                this.setState({ delta: e.touches[0].clientX - this.state.initialX })
            }
            else {
                this.setState({ delta: e.clientX - this.state.initialX })
            }
        }
    }

    endDrag = () => {
        this.props.drag(transition);

        if (this.state.delta > this.state.windowWidth / 8) {
            this.props.slideImage('prev')
        }
        else if (this.state.delta < (this.state.windowWidth / 8) * -1) {
            this.props.slideImage('next')
        }
        this.setState({ delta: 0, dragActive: false })
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
                        onTouchStart={this.startDrag}
                        onTouchMove={this.handleDrag}
                        onTouchEnd={this.endDrag}
                        onTouchCancel={this.endDrag}

                        onMouseDown={this.startDrag}
                        onMouseMove={this.handleDrag}
                        onMouseUp={this.endDrag}
                        onMouseLeave={this.endDrag}
                        style={{ transform: `translateX(${this.props.imageCounter * -this.state.windowWidth + this.state.delta}px)`, transition: this.props.transition }}
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

                    <div className="dotsContainer">
                        <ul>
                            {this.props.images.map((item, index) => {
                                return (
                                    <li key={index} onClick={(() => {
                                        this.props.handleDotClick(index + 1, transition)
                                    })} >
                                        <ImageDot
                                            isActive={index + 1 === this.props.imageCounter ? true : false}
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
