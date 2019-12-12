import React, { Component } from 'react'
import './ProjectPage.scss'
import { testProject } from '../../data'
import ImageSlider from './ImageSlider/ImageSlider'


export class ProjectPage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='projectPageContainer'>
                <div className="returnBar">
                    <a
                        href={'/projekty'}
                        className="returnButton"
                    >
                        ‹ powrót
                    </a>
                </div>
                <div className="projectContentContainer">
                    <div className="projectText">
                        <div className="titleContainer">
                            <h1>{testProject.name}</h1>
                            <h2>{testProject.location}</h2>
                        </div>
                        <div className="descritpionContainer">

                            <hr />
                            <p><span className="italic">inwestor: &nbsp;</span>{testProject.investor}</p>
                            <p><span className="italic">projekt: &nbsp;</span>{testProject.projectDate}</p>
                            <p><span className="italic">realizacja: &nbsp;</span>{testProject.buildingDate}</p>
                            <p className="descritpion">
                                {testProject.descritpion}
                            </p>
                        </div>
                    </div>
                    <div className="projectImages">
                        <ImageSlider data={testProject} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectPage
