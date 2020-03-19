import React, { Component } from 'react'
import './Projects.scss'
import FlipMove from 'react-flip-move';
import { v1 as uuidv1 } from 'uuid'
import { PortfolioItem } from './PortfolioItem';
import { testItems } from '../../data'
import { projects } from '../../data'
import { Parallax, Background } from 'react-parallax'
import bgProjects from '../../assets/sections/bg-projects.JPG'

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
                    strength={200}
                    bgImage={bgProjects}
                    bgImageAlt="pracownia architektoniczna wrocław"
                >
                    <div className="contentWrapper">
                        <div className="headerWhiteBar">
                            <h1>Portfolio</h1>
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
                            projects.map((item, index) => {
                                return (
                                    <PortfolioItem
                                        key={index}
                                        name={item.portfolioName}
                                        year={item.portfolioYear}
                                        url={item.url}
                                        image={item.images[0]}
                                    />
                                )
                            })
                            :
                            projects.filter(i => {
                                return i.portfolioType === this.state.selected
                            }).map((item, index) => {
                                return (
                                    <PortfolioItem
                                    key={index}
                                        name={item.portfolioName}
                                        year={item.portfolioYear}
                                        url={item.url}
                                        image={item.images[0]}
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

