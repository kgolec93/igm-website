import React, { Component } from 'react'
import FlipMove from 'react-flip-move';
import { v1 as uuidv1 } from 'uuid'
import { Link } from 'react-router-dom'

export class PortfolioItem extends Component {
    constructor() {
        super();
        this.state = {
            isHovered: false
        }
    }
    render() {
        return (
            <div
                className={`portfolioItem ${this.props.type}`}
                onMouseEnter={() => this.setState({ isHovered: true })}
                onMouseLeave={() => this.setState({ isHovered: false })}
            >
                <img
                    src={this.props.image}
                    alt="projekt"
                    className={this.state.isHovered ? 'blur' : ''}

                />

                <Link to={`projekty/${this.props.url}`}>
                    <div className="portfolioItemOverlay">
                        <div className="textWrapper">
                            <p>{this.props.name}</p>
                            <p>{this.props.type}</p>
                        </div>
                    </div>
                </Link>
            </div>


        )
    }
}

export default PortfolioItem

