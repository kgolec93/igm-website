import React, { Component } from 'react'
import { v1 as uuidv1 } from 'uuid'
import './ImageSlideshow.scss'
import { CSSTransition } from 'react-transition-group'
import img01 from '../../assets/landing-page/01.jpg'
import img02 from '../../assets/landing-page/02.jpg'
import img03 from '../../assets/landing-page/03.jpg'
import img04 from '../../assets/landing-page/04.jpg'
import img05 from '../../assets/landing-page/05.jpg'
import img06 from '../../assets/landing-page/06.jpg'
import img07 from '../../assets/landing-page/07.jpg'
import img08 from '../../assets/landing-page/08.jpg'
import img09 from '../../assets/landing-page/09.jpg'
import { Link } from 'react-router-dom'

import infoIcon from '../../assets/svg/infoIcon.svg'


const images = [
    {
        src: img01
    },
    {
        src: img02
    },
    {
        src: img09
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

const transition = `transform 1.5s ease-in-out`;
const transitionDelay = 10000;

class InfoWindow extends Component {
    constructor() {
        super();
        this.state = {
            hover: false
        }
    }

    handleClick = () => {
        if (window.innerWidth < 768) {
            if (this.state.hover === false) {
                this.setState({ hover: true });
                this.props.pauseSlideshow();
            }
            else if (this.state.hover === true) {
                this.setState({ hover: false });
                this.props.resumeSlideshow();
            }
        }
    }

    handleHover = () => {
        if (window.innerWidth > 768) {
            if (this.state.hover === false) {
                this.setState({ hover: true });
                this.props.pauseSlideshow();
            }
            else if (this.state.hover === true) {
                this.setState({ hover: false });
                this.props.resumeSlideshow();
            }
        }
    }

    render() {
        return (
            <div
                className='infoWrapper'
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}
                onClick={this.handleClick}
            >
                <img src={infoIcon} alt="info" />

                <CSSTransition in={this.state.hover} timeout={200} unmountOnExit={true} classNames='counterAnim'>
                    <div className="infoWindow">
                        <p>Kraków, Rynek Dębnicki</p>
                        <p>2019-2020</p>
                        <Link className='link' to='/projekty/test-url-1'>zobacz projekt ›</Link>
                    </div>
                </CSSTransition>
            </div>
        )
    }
}


export class ImageSlideshow extends Component {
    constructor() {
        super();
        this.state = {
            imageCounter: 0,
            imageArray: [],
            windowWidth: window.innerWidth,
            transition: transition,
            showDetails: false,
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

        this.interval = setInterval(() => this.counter(), transitionDelay)
    }

    pauseSlideshow = () => {
        clearInterval(this.interval);
    }

    resumeSlideshow = () => {
        this.interval = setInterval(() => this.counter(), transitionDelay)
    }

    counter = () => {
        if (this.state.imageCounter === images.length + 1) {
            this.setState({ imageCounter: 0 })
        }
        else {
            this.setState({
                transition: transition,
                imageCounter: this.state.imageCounter + 1,
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
                        <div className="imageslideshow-item">
                            <img
                                src={item.src}
                                alt={`sliderImage${images.indexOf(item)}`}
                                key={uuidv1()}
                            />
                            {/* <div className='detailsContainer'>
                                <p>Kraków, Rynek Dębnicki</p>
                                <p>2019-2020</p>
                                <Link className='link' to='/projekty/test-url-1'>zobacz projekt ›</Link>
                            </div> */}
                            <InfoWindow
                                pauseSlideshow={this.pauseSlideshow}
                                resumeSlideshow={this.resumeSlideshow}
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

