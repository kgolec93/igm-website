import React, { Component } from 'react'
import './Projects.scss'
import FlipMove from 'react-flip-move';
import { v1 as uuidv1 } from 'uuid'
import { PortfolioItem } from './PortfolioItem';
import { testItems } from '../../data'
import { Parallax, Background } from 'react-parallax'

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
                <Parallax
                    className="headers"
                    strength={600}
                    bgImage={'https://www.digitalarch.pl/static/media/04.81ed863c.jpg'}
                    bgImageAlt="pracownia architektoniczna wrocław"
                >
                    <h1>Nasze Projekty</h1>
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

                </Parallax>

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
                                        image={item.image}
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
                                        image={item.image}
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

