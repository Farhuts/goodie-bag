
import React, { Component } from 'react';
import {Link, Navlink, withRouter} from 'react-router-dom';

class Navbar extends Component {

  render () {
    return (
      <nav id='navbar'>
        <ul>
          <li className='box'><Link to="/" className='box'>Home</Link></li>
          <li className='box'><Link to="/ListAllCandies" className='box'>Candies</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
