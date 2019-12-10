import React, { Component } from 'react'
import './Projects.scss'
import FlipMove from 'react-flip-move';
import { v1 as uuidv1 } from 'uuid'
import { PortfolioItem } from './PortfolioItem';

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
                            onClick={() => {
                                this.setState({ selected: null }); 
                                setTimeout(()=>{
                                    this.setState({ selected: 'all' })
                                }, 300)
                            }}
                        >
                            wszystkie</p>
                        <p className='not-clickable'>/</p>
                        <p
                            className={this.state.selected === 'housing' ? 'selected' : null}
                            onClick={() => {
                                this.setState({ selected: null }); 
                                setTimeout(()=>{
                                    this.setState({ selected: 'housing' })
                                }, 300)
                            }}
                        >mieszkaniowe</p>
                        <p className='not-clickable'>/</p>
                        <p
                            className={this.state.selected === 'services' ? 'selected' : null}
                            onClick={() => {
                                this.setState({ selected: null }); 
                                setTimeout(()=>{
                                    this.setState({ selected: 'services' })
                                }, 300)
                            }}
                        >usługowe</p>
                        <p className='not-clickable'>/</p>
                        <p
                            className={this.state.selected === 'commercial' ? 'selected' : null}
                            onClick={() => {
                                this.setState({ selected: null }); 
                                setTimeout(()=>{
                                    this.setState({ selected: 'commercial' })
                                }, 300)
                            }}
                        >komercyjne</p>
                    </div>
                </div>

                <div className="portfolioItemsContainer">
                    <FlipMove
                        staggerDurationBy="20"
                        duration={100}
                        typeName={null}
                        appearAnimation='elevator'
                    >
                        {this.state.selected === 'all' ?
                            testItems.map((item) => {
                                return (
                                    <PortfolioItem
                                        key={uuidv1()}
                                        name={item.name}
                                        type={item.type}
                                    />
                                )
                            })
                            :
                            testItems.filter(i => {
                                return i.type === this.state.selected
                            }).map((item) => {
                                return (
                                    <PortfolioItem
                                        key={uuidv1()}
                                        name={item.name}
                                        type={item.type}
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

