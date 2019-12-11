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
      <div className="logoContainer">
        logo placeholder
      </div>
      <nav>
        {data.map(item => {
          return (
            <NavLink key={uuidv1()} className='nav-link' exact activeClassName='header-nav-active' to={item.url}>{item.section}</NavLink>
          )
        })}
      </nav>

    </header>

  )
}

const Project = props => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.data} | IGM Pracownia Projektowa</title>
        <link rel="canonical" href={`https://mysite.com/projects/${props.url}`} />
      </Helmet>
      <p>{props.data}</p>
    </div>
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
            <Route path="/projekty">
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
                <Route key={item.url} path={`/projects/${item.url}`}>
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
