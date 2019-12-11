import React, { Component } from 'react'
import './ProjectPage.scss'

export class ProjectPage extends Component {
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
                            <h1>Projekt budynku wielorodzinnego</h1>
                            <h2>Kraków, Rynek Dębnicki</h2>
                        </div>
                        <div className="descritpionContainer">

                            <hr />
                            <p><span className="italic">inwestor: &nbsp;</span>Janusz Kowalski</p>
                            <p><span className="italic">projekt: &nbsp;</span>2019</p>
                            <p><span className="italic">realizacja: &nbsp;</span>2020-2021</p>
                            <p className="descritpion">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div className="projectImages">
                        <div className="imageContainer">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectPage
