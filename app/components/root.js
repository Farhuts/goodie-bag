import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ListAllCandies from './ListAllCandies';
import Navbar from './Navbar';
import Home from './Home';
import SingleCandy from './SingleCandy';

const Root = () => {
  return (
  <BrowserRouter>
    <div>
      <nav>
        Goodie Bag
        <Navbar />
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <Route exact path='/Home' component={Home} />
      </main>
        <Route exact path='/ListAllCandies' component={ListAllCandies} />
        <Route exact path='/ListAllCandies/:candyId' component={SingleCandy} />
    </div>
  </BrowserRouter>
  )
}

export default Root
