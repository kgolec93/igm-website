import React, { Component } from 'react'
import firebase from 'firebase'
import './News.scss'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import moment from 'moment'

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
                    posts: Object.keys(snapshot.val() || {}).map(
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
                <h1>Aktualności</h1>
                <div className="postsContainer">
                    {this.state.posts !== '' &&
                        this.state.posts.map((item, index) => {
                            return (
                                <div className='item' key={`post-${index}`}>
                                    <p className="date">{moment(item.date).format('L')}</p>
                                    <h2 className='postTitle'>{item.name}</h2>
                                    {ReactHtmlParser(item.contentHTML)}
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default News
