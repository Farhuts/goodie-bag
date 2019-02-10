import React, { Component } from 'react';
import {Link, Navlink, withRouter} from 'react-router-dom';

class Navbar extends Component {

  render () {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className='nav-wraper'>
            <div className="container">
              <Link to="/Home" className="brand-logo">Goodie Bag</Link>
                <ul className='right'>
                  <li><Link to="/Home" className='box'>Home</Link></li>
                  <li><Link to="/ListAllCandies" className='box'>Candies</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
