import React, { Component } from 'react'
import FlipMove from 'react-flip-move';
import { v1 as uuidv1 } from 'uuid'

export class PortfolioItem extends Component {

    render() {
        return (
            <div className={`portfolioItem ${this.props.type}`}>
                <a href={`projekty/${this.props.url}`}>
                    <div className="portfolioItemOverlay">
                        <div className="textWrapper">
                            <p>{this.props.name}</p>
                            <p>{this.props.type}</p>
                        </div>
                    </div>
                </a>
            </div>


        )
    }
}

export default PortfolioItem

