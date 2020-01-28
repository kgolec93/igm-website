import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, NavLink } from 'react-router-dom'
import { data, testItems } from './data';
import Helmet from 'react-helmet'
import LandingPage from './components/LandingPage/LandingPage'
import Projects from './components/Projects/Projects'
import { v1 as uuidv1 } from 'uuid'
import ProjectPage from './components/ProjectPage/ProjectPage';

import phoneIcon from './assets/icons/misc/phone.svg'
import mailIcon from './assets/icons/misc/mail.svg'
import homeIcon from './assets/icons/misc/home.svg'
import { Contact } from './components/Contact/Contact';

import logoBK from './assets/logo-bk.svg'
import LoaderPage from './components/LoaderPage/LoaderPage';

import mobileMenu from './assets/svg/hamburgerMenu.svg'
import closeMenu from './assets/svg/closeMenu.svg'
import News from './components/News/News';
import Offer from './components/Offer'
import { About } from './components/About/About';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      mobileMenuOpen: false
    }
  }
  render() {
    return (
      <header>
        <NavLink
          to='/'
          className="logoContainer"
          onClick={() => this.setState({ mobileMenuOpen: false })}
        >
          <img src={logoBK} alt="igm-logo" />
          <p>IGM_Architekci</p>
        </NavLink>
        <nav className='desktopMenu'>
          {data.map(item => {
            return (
              <NavLink key={uuidv1()} className='nav-link' activeClassName='header-nav-active' to={item.url}>{item.section}</NavLink>
            )
          })}
        </nav>
        <nav className="mobileMenu">
          <img
            src={this.state.mobileMenuOpen ? closeMenu : mobileMenu}
            className='mobileMenuIcon'
            alt="Menu"
            onClick={() => { this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen }) }}
          />

          <div className={`${this.state.mobileMenuOpen ? 'open' : ''} mobileNavWrapper`}>
            {data.map(item => {
              return (
                <NavLink
                  key={uuidv1()}
                  className='nav-link'
                  activeClassName='header-nav-active'
                  to={item.url}
                  onClick={() => this.setState({ mobileMenuOpen: false })}
                >
                  {item.section}
                </NavLink>
              )
            })}
          </div>
        </nav>
      </header>
    )
  }
}

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <img src={mailIcon} alt="mail" />
          <a href='mailto:biuro@igmarchitekci.pl'>biuro@igmarchitekci.pl</a>
        </li>
        <li>
          <img src={phoneIcon} alt="phone" />
          <a href='tel:+48696696696'>+48 606 606 606</a>
        </li>
        <li>
          <img src={homeIcon} alt="home" />
          <a href='https://www.google.com/maps/dir/51.1191217,17.0543808/MOI+ARCHITEKCI+Bartoszowicka+11/@51.1097851,17.0667035,14z/data=!3m1!4b1!4m11!1m2!2m1!1smoiarchitekci!4m7!1m0!1m5!1m1!1s0x470fc2aaa0a14591:0x4fb430c07432f5d7!2m2!1d17.1138315!2d51.0996264' target='blank'>ul. Wróblewskiego 29 Wrocław</a>
        </li>
      </ul>
      <p>website created by <a href="https://webble.pl" target="_blank" rel="noopener noreferrer">webble.</a></p>
    </footer>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              {/* <LoaderPage /> */}
              <LandingPage />
            </Route>
            <Route path="/oferta">
              <Offer />
            </Route>
            <Route exact path="/projekty">
              <Projects />
            </Route>
            <Route path="/o-nas">
              <About />
            </Route>
            <Route path="/kontakt">
              <Contact />
            </Route>
            <Route path="/aktualnosci">
              <News />
            </Route>
            <Route path="/test">
              <LoaderPage />
            </Route>
            {testItems.map(item => {
              return (
                <Route key={item.url} path={`/projekty/${item.url}`}>
                  <ProjectPage url={item.url} data={item.name} />
                </Route>
              )
            })}

          </Switch>
        </main>
        <Footer />
      </div>
    );
  }

}

export default App;
