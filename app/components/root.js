import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import ListAllCandies from './ListAllCandies'
import Navbar from './Navbar'

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
        <p>What a nice home page for your goodies!</p>
      </main>
      <div className="main">
        <Route exact path='/ListAllCandies' component={ListAllCandies} />
      </div>
    </div>
  </BrowserRouter>
  )
}

export default Root
