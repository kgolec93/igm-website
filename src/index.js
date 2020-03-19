import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import Firebase, { FirebaseContext } from './components/Firebase'
import ScrollToTop from './ScrollToTop';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    hydrate(
        <Router>
            <ScrollToTop>
                <FirebaseContext.Provider value={new Firebase()}>
                    <FirebaseContext.Consumer>
                        {firebase => {
                            return <App />;
                        }}
                    </FirebaseContext.Consumer>
                </FirebaseContext.Provider>
            </ScrollToTop>
        </Router>
        , rootElement);
} else {
    render(
        <Router>
            <ScrollToTop>
                <FirebaseContext.Provider value={new Firebase()}>
                    <FirebaseContext.Consumer>
                        {firebase => {
                            return <App />;
                        }}
                    </FirebaseContext.Consumer>
                </FirebaseContext.Provider>
            </ScrollToTop>
        </Router>
        , rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


