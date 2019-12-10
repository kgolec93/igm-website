import React, { Component } from 'react'
import './Projects.scss'
import FlipMove from 'react-flip-move';
import { v1 as uuidv1 } from 'uuid'
import { PortfolioItem } from './PortfolioItem';
import { testItems } from '../../data'

export class Projects extends Component {
    constructor() {
        super();
        this.state = {
            selected: 'all'
        }
    }

    selectFilter = (target) => {
        this.setState({ selected: target })
    }

    render() {
        return (
            <div className='projectsContainer'>
                <div className="headers">
                    <h1>Projekty</h1>
                    <div className="projectsFilteringNav">
                        <p
                            className={this.state.selected === 'all' ? 'selected' : null}
                            onClick={() => this.selectFilter('all')}

                        >
                            wszystkie</p>
                        <p className='not-clickable'>/</p>
                        <p
                            className={this.state.selected === 'housing' ? 'selected' : null}
                            onClick={() => this.selectFilter('housing')}
                        >mieszkaniowe</p>
                        <p className='not-clickable'>/</p>
                        <p
                            className={this.state.selected === 'services' ? 'selected' : null}
                            onClick={() => this.selectFilter('services')}

                        >usługowe</p>
                        <p className='not-clickable'>/</p>
                        <p
                            className={this.state.selected === 'commercial' ? 'selected' : null}
                            onClick={() => this.selectFilter('commercial')}

                        >komercyjne</p>
                    </div>
                </div>

                <div className="portfolioItemsContainer">
                    <FlipMove
                        staggerDurationBy="10"
                        duration={300}
                        typeName={null}
                        appearAnimation='elevator'
                    >
                        {this.state.selected === 'all' ?
                            testItems.map((item) => {
                                return (
                                    <PortfolioItem
                                        key={`itemKey${testItems.indexOf(item)}`}
                                        name={item.name}
                                        type={item.type}
                                        url={item.url}
                                    />
                                )
                            })
                            :
                            testItems.filter(i => {
                                return i.type === this.state.selected
                            }).map((item) => {
                                return (
                                    <PortfolioItem
                                        key={`itemKey${testItems.indexOf(item)}`}
                                        name={item.name}
                                        type={item.type}
                                        url={item.url}
                                    />
                                )
                            })
                        }
                    </FlipMove>

                </div>
            </div>
        )
    }
}

export default Projects

