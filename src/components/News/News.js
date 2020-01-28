import React, { Component } from 'react'
import firebase from 'firebase'
import './News.scss'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import moment from 'moment'
import loaderSpinner from '../../assets/spinner.png'
import { Jumbo } from '../Jumbo/Jumbo';
import bgNews from '../../assets/sections/bg-news.jpg'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            posts: '',
        }
    }

    componentDidMount() {
        firebase.database().ref('posts/')
            .once('value').then((snapshot) => {
                this.setState({
                    posts: Object.keys(snapshot.val() || {}).reverse().map(
                        key => ({
                            ...snapshot.val()[key],
                            key: key,
                        })
                    )
                })
            })
    }



    render() {
        return (
            <div id='newsMainContainer'>
                <Jumbo
                    bgImage={bgNews}
                    alt={'aktualności'}
                    header={'Aktualności'}
                />
                <div className="postsContainer">
                    {this.state.posts !== '' ?
                        this.state.posts.map((item, index) => {
                            return (
                                <div className='item' key={`post-${index}`}>
                                    <p className="date">Dodano {moment(item.date).format('L')}</p>
                                    <h2 className='postTitle'>{item.name}</h2>
                                    {ReactHtmlParser(item.contentHTML)}
                                </div>
                            )
                        })
                        :
                        <div className="spinnerWrapper">
                            <img src={loaderSpinner} alt="loading" />
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default News
