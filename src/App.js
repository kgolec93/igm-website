import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, NavLink } from 'react-router-dom'
import { data, testItems } from './data';
import Helmet from 'react-helmet'
import LandingPage from './components/LandingPage/LandingPage'
import Projects from './components/Projects/Projects'
import { v1 as uuidv1 } from 'uuid'
import ProjectPage from './components/ProjectPage/ProjectPage';

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
              <p>kontakt</p>
            </Route>
            <Route path="/blog">
              <p>kontakt</p>
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
        <footer>
          footertext
        </footer>
      </div>
    );
  }

}

export default App;
