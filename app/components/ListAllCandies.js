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
          <div className="center-align" key={candy.id}>
            <Link to={'/ListAllCandies/'+ candy.id}>
            <div className="valign-wrappe">
                <h2 className="pink-text darken-3"> {candy.name}</h2>
                <img className="image" src={candy.imageUrl} />
            </div>
          </Link>
        </div>
        )
      })
    ) : (
      <div className="center-align">No candies yet</div>
    )
    return (
        <div className="center-align">
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
