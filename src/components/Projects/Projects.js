import React, { Component } from 'react'
import './Projects.scss'
import FlipMove from 'react-flip-move';
import { v1 as uuidv1 } from 'uuid'

const testItems = [
    {
        name: 'test name',
        year: '2020',
        type: 'housing'
    },
    {
        name: 'test name',
        year: '2020',
        type: 'commercial'
    },
    {
        name: 'test name',
        year: '2020',
        type: 'housing'
    },
    {
        name: 'test name',
        year: '2020',
        type: 'services'
    },
    {
        name: 'test name',
        year: '2020',
        type: 'housing'
    },
    {
        name: 'test name',
        year: '2020',
        type: 'services'
    },
    {
        name: 'test name',
        year: '2020',
        type: 'housing'
    },
    {
        name: 'test name',
        year: '2020',
        type: 'services'
    },
    {
        name: 'test name',
        year: '2020',
        type: 'housing'
    },
    {
        name: 'test name',
        year: '2020',
        type: 'housing'
    },
    {
        name: 'test name',
        year: '2020',
        type: 'commercial'
    },
    {
        name: 'test name',
        year: '2020',
        type: 'housing'
    },
    {
        name: 'test name',
        year: '2020',
        type: 'services'
    },
    {
        name: 'test name',
        year: '2020',
        type: 'commercial'
    },
    {
        name: 'test name',
        year: '2020',
        type: 'housing'
    },
    {
        name: 'test name',
        year: '2020',
        type: 'commercial'
    },
]

export class Projects extends Component {
    constructor() {
        super();
        this.state = {
            selected: 'all'
        }
    }

    render() {
        return (
            <div className='projectsContainer'>
                <div className="headers">
                    <h1>Projekty</h1>
                    <div className="projectsFilteringNav">
                        <p
                            className={this.state.selected === 'all' ? 'selected' : null}
                            onClick={() => this.setState({ selected: 'all' })}
                        >
                            wszystkie</p>
                        <p className='not-clickable'>/</p>
                        <p
                            className={this.state.selected === 'housing' ? 'selected' : null}
                            onClick={() => this.setState({ selected: 'housing' })}
                        >mieszkaniowe</p>
                        <p className='not-clickable'>/</p>
                        <p
                            className={this.state.selected === 'services' ? 'selected' : null}
                            onClick={() => this.setState({ selected: 'services' })}
                        >usługowe</p>
                        <p className='not-clickable'>/</p>
                        <p
                            className={this.state.selected === 'commercial' ? 'selected' : null}
                            onClick={() => this.setState({ selected: 'commercial' })}
                        >komercyjne</p>
                    </div>
                </div>

                <div className="portfolioItemsContainer">
                    <FlipMove
                        staggerDurationBy="30"
                        duration={200}
                        typeName={null}
                        appearAnimation='elevator'
                    >
                        {this.state.selected === 'all' ?
                            testItems.map((item) => {
                                return (
                                    <div key={uuidv1()} className={`portfolioItem ${item.type}`}>
                                        <p style={{ color: `white` }}>{item.type}</p>
                                    </div>
                                )
                            })
                            :
                            testItems.filter(i => {
                                return i.type === this.state.selected
                            }).map((item) => {
                                return (
                                    <div key={uuidv1()} className={`portfolioItem ${item.type}`}>
                                        <p style={{ color: `white` }}>{item.type}</p>
                                    </div>
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

