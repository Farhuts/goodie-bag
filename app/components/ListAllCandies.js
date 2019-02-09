import React, { Component } from 'react';
import { fetchCandies, fetchOneCandy } from '../reducers/index';
import { connect } from 'react-redux';
import Root from './Root';
import {Link} from 'react-router-dom';
import SingleCandy from './SingleCandy';


class ListAllCandies extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    this.props.fetchCandies()

  }

  render(){
    const candies = this.props.candies;
    const candyList = candies.length ? (
      candies.map(candy => {
        return (
          <div className="main" key={candy.id}>
            <Link to={'/ListAllCandies/'+ candy.id}>
              <h1> {candy.name} {candy.quantity}<img src={candy.imageUrl} /></h1>
              </Link>
          </div>
        )
      })
    ) : (
      <div className="main">No candies yet</div>
    )
    return (
        <div className="main">
            {candyList}
        </div>
      )
    }
  }

const mapState = (state) => {
  return {
    candies: state.candies
  }
}
const mapDispatch = (dispatch) => {
  return {
    fetchCandies: () => dispatch(fetchCandies())
  }
}

export default connect(mapState, mapDispatch)(ListAllCandies)
