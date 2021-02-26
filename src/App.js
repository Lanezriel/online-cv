import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Header from './parts/Header';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Presentation from './pages/Presentation';
import Experiences from './pages/Experiences';

class App extends Component {
  state = {
    brand: {
      title: "Dimitri Delbrouck",
      sub: "Web developer",
    },
    links: [
      {text: "Home", component: Home, link: "/"},
      {text: "Presentation", component: Presentation, link: "/presentation"},
      {text: "Experiences", component: Experiences, link: "/experiences"},
      {text: "Achievements", component: NotFound, link: "/achievements"},
      {text: "Contact", component: NotFound, link: "/contact"},
    ],
  }

  render() {
    const {brand, links} = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <Header brand={brand} links={links} />
          <Switch>
            {links.map((link, index) => {
              return(<Route exact path={link.link} key={index}><link.component /></Route>)
            })}
            <Route exact path="/404"><NotFound /></Route>
            <Route path="*"><Redirect to="/404" /></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
