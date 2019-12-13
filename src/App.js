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

const Header = props => {
  return (
    <header>
      <a href='/' className="logoContainer">
        logo placeholder
      </a>
      <nav>
        {data.map(item => {
          return (
            <a key={uuidv1()} className={`nav-link ${window.location.href.includes(item.url) ? 'header-nav-active' : null }`} href={item.url}>{item.section}</a>
          )
        })}
      </nav>

    </header>

  )
}

const Footer = () => {
  return(
    <footer>
      <ul>
        <li>
          <img src={mailIcon} alt="mail"/>
          <p>biuro@igmarchitekci.pl</p>
        </li>
        <li>
          <img src={phoneIcon} alt="phone"/>
          <p>+48 606 606 606</p>
        </li>
        <li>
          <img src={homeIcon} alt="home"/>
          <p>ul. Wróblewskiego 29 Wrocław</p>
        </li>
      </ul>
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
              <LandingPage />
            </Route>
            <Route path="/oferta">
              <p>oferta</p>
            </Route>
            <Route exact path="/projekty">
              <Projects />
            </Route>
            <Route path="/pracownia">
              <p>pracownia</p>
            </Route>
            <Route path="/kontakt">
              <Contact />
            </Route>
            <Route path="/blog">
              <p>blog</p>
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
