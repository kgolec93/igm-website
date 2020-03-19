import React, { Component } from 'react'
import './About.scss'
import Jumbo from '../Jumbo/Jumbo'
import avatar from '../../assets/about/avatarPlaceholder.png'
import bgAbout from '../../assets/sections/bg-about.jpg'
import { Parallax, Background } from 'react-parallax'
import IGM_Logo_Full from '../../assets/IGM_Logo_Full.png'

const people = [
    {
        img: avatar,
        name: 'Adrian Gregorczyk',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: avatar,
        name: 'Krystian Kusz',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: avatar,
        name: 'Michał Brzecki',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
]

const intervalValue = 30;

export class About extends Component {
    constructor() {
        super();
        this.state = {
            counterYears: 0,
            counterYearsMax: 10,

            counterClients: 0,
            counterClientsMax: 45,

            counterProjects: 0,
            counterProjectsMax: 76
        }
        setTimeout(() => {
            this.intervalYears = setInterval(() => {
                this.setState({ counterYears: this.state.counterYears + 1 });
            }, intervalValue)
            this.intervalClients = setInterval(() => {
                this.setState({ counterClients: this.state.counterClients + 1 });
            }, intervalValue)
            this.intervalProjects = setInterval(() => {
                this.setState({ counterProjects: this.state.counterProjects + 1 });
            }, intervalValue)
        }, 3200)

    }

    componentDidUpdate() {

        if (this.state.counterProjects === this.state.counterProjectsMax) {
            clearInterval(this.intervalProjects)
        }
        else if (this.state.counterClients === this.state.counterClientsMax) {
            clearInterval(this.intervalClients)
        }
        else if (this.state.counterYears === this.state.counterYearsMax) {
            clearInterval(this.intervalYears)
        }
    }
    render() {
        return (
            <div id='AboutPageContainer'>
                <Parallax
                    className="jumboContainer"
                    strength={200}
                    bgImage={bgAbout}
                    bgImageAlt='O nas'
                >
                    <div className="contentWrapper">
                        <div className="textContainer">
                            <div className="logoWrapper">
                                <img id='logoWhite' src={IGM_Logo_Full} alt="IGM Architekci Wrocław" />
                            </div>
                            <div className="descriptionContainer">
                                <p className="description">
                                    Oferujemy kompleksową obsługę w zakresie projektowania i doradztwa architektonicznego na terenie całego kraju. Posiadamy szerokie doświadczanie  w szczególności  w zakresie projektowania obiektów mieszkaniowych, przemysłowych i handlowych.
                                </p>
                                <p className="description">
                                    W ramach naszej dotychczasowej działalności wykonaliśmy kilkaset dokumentacji projektowych dot. nowych obiektów, przebudów i rozbudów obiektów w tym m.in. zabytkowych. Specjalizujemy się także w projektach aranżacji lokali handlowych.
                                </p>
                                <p className="description">
                                    Współpracujemy z doświadczonymi projektantami branż: konstrukcyjnej, instalacji sanitarnych i mechanicznych, elektrycznych i niskoprądowych oraz drogowej. Z uwagi na szerokie spektrum realizowanych dotychczas projektów możemy pochwalić się współpracą z większością znanych rzeczoznawców ds. zabezpieczeń p.poż oraz BHP/sanepid na terenie całego kraju.
                                </p>
                            </div>
                            <div className="numbersContainer">
                                <div className="numberItem">
                                    <p className='center'>
                                        Działamy od
                                    </p>
                                    <p className='largeNumber center'>
                                        {this.state.counterYears}
                                    </p>
                                    <p className='center'>
                                        lat
                                    </p>
                                </div>
                                <div className="numberItem">
                                    <p>
                                        Mamy już
                                    </p>
                                    <p className='largeNumber'>
                                        {this.state.counterClients}
                                    </p>
                                    <p>
                                        zadowolonych klientów
                                    </p>
                                </div>
                                <div className="numberItem">
                                    <p>
                                        Na naszym koncie jest
                                    </p>
                                    <p className='largeNumber'>
                                        {this.state.counterProjects}
                                    </p>
                                    <p>
                                        projektów
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="headerBar">
                            <h1>
                                O nas
                            </h1>
                        </div>
                    </div>
                </Parallax>
                <section className="section-02">
                    <div className="peopleContainer">
                        <p>Partnerzy:</p>
                        {
                            people.map((item, index) => {
                                return (
                                    <div key={`item-${index}`} className="item" >
                                        <img src={item.img} alt={item.name} />
                                        <div className="descriptionContainer">
                                            <h3>{item.name}</h3>
                                            <p>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="clientsContainer">
                        <h3>Nasi klienci:</h3>
                    </div>
                </section>
            </div >
        )
    }

}


