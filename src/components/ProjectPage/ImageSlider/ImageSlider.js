import React, { Component } from 'react'

const transition = `transform 0.3s ease-in-out`

export class ImageSlider extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            windowWidth: null,
            imageCounter: 1,
            transition: transition
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
                        transition: 'none'
                    })
                    setTimeout(() => {
                        this.setState({ transition: transition })
                    }, 300)
                }
                else if (this.state.imageCounter === 0) {
                    this.setState({
                        imageCounter: this.state.data.images.length,
                        transition: 'none'
                    })
                }
            })
        }, 500)

        window.addEventListener('resize', this.resizeWindow, false)
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.resizeWindow, false)
    }

    resizeWindow = () => {
        this.setState({ windowWidth: this.refs.imageContainer.clientWidth })
    }

    changeImage = (e) => {
        if (e.target.id === `prevArrow`) {
            if (this.state.imageCounter === 0) {
                this.setState({ transition: transition, imageCounter: this.state.data.images.length })
            }
            else {
                this.setState({ transition: transition, imageCounter: this.state.imageCounter - 1 })
            }
        }


        else if (e.target.id === `nextArrow`) {
            if (this.state.imageCounter === this.state.data.images.length+1) {
                this.setState({ transition: transition, imageCounter: 1 })
            }
            else {
                this.setState({ transition: transition, imageCounter: this.state.imageCounter + 1 })

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
                <div className="imageContainer" ref='imageContainer'>
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
                    <div onClick={this.changeImage} className='sliderControls' id="prevArrow">
                        PREV
                    </div>
                    <div onClick={this.changeImage} className='sliderControls' id="nextArrow">
                        NEXT
                    </div>
                </div>
            )
        }
    }
}

export default ImageSlider
