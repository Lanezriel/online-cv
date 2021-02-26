import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.svg';
import NavBurger from '../components/NavBurger';
import './Header.scss';

class Header extends Component {
  state = {
    burgerActive: false,
  }

  navBurgerClick() {
    const { burgerActive } = this.state

    this.setState({burgerActive: !burgerActive})
    return
  }

  render() {
    const { brand, links } = this.props;
    return (
      <nav className="navbar sticky-top shadow-5" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <span className="navbar-item">
            <img src={logo} alt="Logo" />
            <span className="brand-title">{brand.title}</span>
          </span>

          <NavBurger burgerActive={this.state.burgerActive} onClick={this.navBurgerClick.bind(this)} />
        </div>

        <div
          id="navbarMenu"
          className={`navbar-menu ${this.state.burgerActive && "is-active"}`}
        >
          <div className="navbar-end">
            {links.map((link, index) => (
              <Link className="navbar-item has-text-weight-semibold" to={link.link} key={index}>{link.text}</Link>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;