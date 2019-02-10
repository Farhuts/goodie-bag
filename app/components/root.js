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
      <Navbar />
      <main className='center-align'>
        <h2 id="root">Welcome to the Goodie Bag!</h2>
        <Route exact path='/Home' component={Home} />
      </main>
        <Route exact path='/ListAllCandies' component={ListAllCandies} />
        <Route exact path='/ListAllCandies/:candyId' component={SingleCandy} />
    </div>
  </BrowserRouter>
  )
}

export default Root
