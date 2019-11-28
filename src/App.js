import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, NavLink } from 'react-router-dom'
import { data } from './data';
import Helmet from 'react-helmet'
import LandingPage from './components/LandingPage/LandingPage'

const Header = props => {
  return (
    <header>
      <div className="logoContainer">
        logo placeholder
      </div>
      <nav>
        {data.map(item => {
          return (
            <NavLink className='nav-link' exact activeClassName='header-nav-active' to={item.url}>{item.section}</NavLink>
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
            <Route exact path="/" component={LandingPage} />
            {data.map(item => {
              return (
                <Route path={`/projects/${item.url}`}>
                  <Project url={item.url} data={item.text} />
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
