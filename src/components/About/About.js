import React from 'react'
import './About.scss'
import Jumbo from '../Jumbo/Jumbo'
import avatar from '../../assets/about/avatarPlaceholder.png'
import bgAbout from '../../assets/sections/bg-about.jpg'
import { Parallax, Background } from 'react-parallax'

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

export const About = () => {
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
                        <h2>
                            IGM_Architekci
                    </h2>
                        <p className='description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                        <div className="numbersContainer">
                            <div className="numberItem">
                                <p className='center'>
                                    Działamy od
                            </p>
                                <p className='largeNumber center'>
                                    10
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
                                    45
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
                                    76
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
