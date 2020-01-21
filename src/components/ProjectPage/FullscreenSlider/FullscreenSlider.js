import React, { Component } from 'react'
import './FullscreenSlider.scss'
import arrow from '../../../assets/svg/imageArrow.svg'
import close from '../../../assets/svg/closeImage.svg'

const transition = 'transform 0.3s ease-in-out';

export class FullscreenSlider extends Component {
    constructor() {
        super();
        this.state = {
            windowWidth: null,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.refs.imageSlideshow.addEventListener('transitionend', () => {
                if (this.props.imageCounter === this.props.images.length + 1) {
                    this.props.transitionEnd(1, 0, 'none');
                }
                else if (this.props.imageCounter === 0) {
                    this.props.transitionEnd(this.props.images.length, 0, 'none');
                }
            })
        }, 500)

        this.setState({
            windowWidth: window.innerWidth 
        })

        window.addEventListener('resize', this.resizeWindow, false)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeWindow, false)
    }

    resizeWindow = () => {
        this.setState({ windowWidth: window.innerWidth })
    }

    render() {
        return (
            <div id='fullscreenSliderContainer'>
                <div className="sliderFrame">
                    <div className="imagesCarousel"
                        style={{ transform: `translateX(${this.props.imageCounter * -this.state.windowWidth}px)`, transition: this.props.transition }}
                        ref='imageSlideshow'
                    >

                        <div className="imageItem">
                            <img src={this.props.images[this.props.images.length - 1]} alt={`images-last`} />
                        </div>

                        {this.props.images.map((item, index) => {
                            return (
                                <div className="imageItem">
                                    <img src={item} alt={`images-${index}`} />
                                </div>
                            )
                        })}

                        <div className="imageItem">
                            <img src={this.props.images[0]} alt={`images-first`} />
                        </div>

                    </div>
                </div>

                <div className="overlay"></div>

                <img
                    src={arrow}
                    alt="left"
                    className="arrow left"
                    onClick={() => this.props.slideImage('prev')}

                />
                <img
                    src={arrow}
                    alt="right"
                    className="arrow right"
                    onClick={() => this.props.slideImage('next')}
                />
                <img
                    src={close}
                    alt="close"
                    className="close"
                    onClick={this.props.closeFullscreen.bind(this)}
                />
            </div>
        )
    }
}

export default FullscreenSlider
