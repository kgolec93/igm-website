import React, { Component } from 'react'
import './ProjectPage.scss'
import { testProject } from '../../data'
import ImageSlider from './ImageSlider/ImageSlider'
import FullscreenSlider from './FullscreenSlider/FullscreenSlider'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'


const images = [
    'https://www.digitalarch2019.webble.pl/static/media/95.21426828.jpg',
    'https://www.digitalarch2019.webble.pl/static/media/97.35c5ba35.jpg',
    'https://www.digitalarch2019.webble.pl/static/media/96.dc013bc9.jpg',
    'https://www.digitalarch2019.webble.pl/static/media/94.6eb7a683.jpg',
    'https://www.digitalarch2019.webble.pl/static/media/98.7f0357c7.jpg'
]

const transition = 'transform 0.3s ease-in-out';

export class ProjectPage extends Component {
    constructor() {
        super();
        this.state = {
            isFullscreen: false,
            imageCounter: 1,
            dotCounter: 0,
            transition: transition
        }
    }


    closeFullscreen = () => {
        this.setState({ isFullscreen: false })
    }

    openFullscreen = () => {
        this.setState({ isFullscreen: true })
    }


    slideImage = (payload) => {
        if (payload === `prev`) {
            if (this.state.imageCounter === 0) {
                this.setState({ transition: transition, imageCounter: images.length })
            }
            else {
                this.setState({ transition: transition, imageCounter: this.state.imageCounter - 1 })
            }
        }


        else if (payload === `next`) {
            if (this.state.imageCounter === images.length + 1) {
                this.setState({ transition: transition, imageCounter: 1 })
            }
            else {
                this.setState({ transition: transition, imageCounter: this.state.imageCounter + 1, dotCounter: this.state.dotCounter + 1 })
            }
        }
    }

    transitionEnd = (imageCounter, dotCounter, transition) => {
        this.setState({
            imageCounter: imageCounter,
            dotCounter: dotCounter,
            transition: transition
        })
    }

    handleDotClick = (imageCounter, transition) => {
        this.setState({
            imageCounter: imageCounter,
            transition: transition
        })
    }

    render() {
        return (
            <div className='projectPageContainer'>
                <div className="returnBar">
                    <Link
                        to={'/projekty'}
                        className="returnButton"
                    >
                        ‹ wszystkie projekty
                    </Link>
                </div>
                <div className="projectContentContainer">
                    <div className="wrapper">
                        <div className="projectText">
                            <div className="titleContainer">
                                <h1>{testProject.name}</h1>
                                <h2>{testProject.location}</h2>
                            </div>
                            <div className="descritpionContainer">

                                <hr />
                                <p><span className="italic">inwestor: &nbsp;</span>{testProject.investor}</p>
                                <p><span className="italic">projekt: &nbsp;</span>{testProject.projectDate}</p>
                                <p><span className="italic">realizacja: &nbsp;</span>{testProject.buildingDate}</p>
                                <p className="descritpion">
                                    {testProject.descritpion}
                                </p>
                            </div>

                        </div>
                        <div className="whiteOverlay" />
                    </div>


                    <div className="projectImages">
                        <ImageSlider
                            images={images}
                            openFullscreen={this.openFullscreen}

                            imageCounter={this.state.imageCounter}
                            slideImage={this.slideImage}
                            transition={this.state.transition}
                            transitionEnd={this.transitionEnd}
                            
                            handleDotClick={(p, t)=>{this.setState({imageCounter: p, transition: t})}}
                        
                            drag={(p)=>this.setState({transition: p})}
                        
                        />
                    </div>
                </div>

                <CSSTransition
                    in={this.state.isFullscreen}
                    unmountOnExit={true}
                    classNames='fullscreen'
                    timeout={300}
                >
                    <FullscreenSlider
                        images={images}
                        closeFullscreen={this.closeFullscreen}

                        imageCounter={this.state.imageCounter}
                        slideImage={this.slideImage}
                        transition={this.state.transition}
                        transitionEnd={this.transitionEnd}
                        drag={(p)=>this.setState({transition: p})}
                    />
                </CSSTransition>

            </div>
        )
    }
}

export default ProjectPage
