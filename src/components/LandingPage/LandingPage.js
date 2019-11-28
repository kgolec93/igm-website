import React, { Component } from 'react'
import './LandingPage.scss'
import { v1 as uuidv1 } from 'uuid'


const images = [
    {
        src: 'https://www.digitalarch.pl/static/media/88.7f6c38f6.jpg',
        id: 'firstImage'
    },
    {
        src: 'https://www.digitalarch.pl/static/media/87.1149d03e.jpg',
        id: null
    },
    {
        src: 'https://www.digitalarch.pl/static/media/83.c8822fbc.jpg',
        id: 'lastImage'
    },

    
]

export class LandingPage extends Component {
    constructor() {
        super();
        this.state = {
            imageCounter: 0,
            imageSize: null
        }
    }

    componentDidMount() {
        this.setState({ imageSize: this.refs.img0.clientWidth })

        window.addEventListener('resize', () => {
            this.setState({ imageSize: this.refs.img0.clientWidth })
        })

        this.refs.container.addEventListener('transitionend', () => {
            if (this.refs.container.childNodes[this.state.imageCounter].id === 'firstImage') {
                this.refs.container.style = {transition: 'none'}
                this.setState({imageCounter: 0})  
            }
        })    
        
        this.interval = setInterval(()=>{
            this.nextImage();
        }, 8000)

    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    nextImage = () => {
        this.setState({ imageCounter: this.state.imageCounter + 1 })
        this.refs.container.style.transition = `transform 1.5s ease-in-out`;
    }

    render() {
        return (
            <div className='landing-page-container'>
                <div className="carousel-container" ref='container' style={{ transform: `translateX(${this.state.imageSize * this.state.imageCounter * -1}px)`}}>
                    {images.map(item => {
                        return (
                            <img
                                id={item.id}
                                ref={`img${images.indexOf(item)}`}
                                src={item.src}
                                alt={`sliderImage${images.indexOf(item)}`}
                                key={uuidv1()}
                            />
                        )
                    })}
                    {images.map(item => {
                        return (
                            <img
                                id={item.id}
                                ref={`img${images.indexOf(item)}`}
                                src={item.src}
                                alt={`sliderImage${images.indexOf(item)}`}
                                key={uuidv1()}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}


export default LandingPage
