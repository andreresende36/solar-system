import React from 'react';
import logo from '../images/logo-sistema-solar.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="header">Sistema Solar</h1>
        <img src={ logo } alt="logo" className="logo" />
      </header>
    );
  }
}

export default Header;
