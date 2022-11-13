import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header data-testid="header-component">
        <Link data-testid="link-to-search" to="/search" />
        <Link data-testid="link-to-favorites" to="/favorites" />
        <Link data-testid="link-to-profile" to="/profile" />

      </header>
    );
  }
}

export default Header;
